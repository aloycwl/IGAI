import axios from "axios";
import fetch from "node-fetch";
import ffmpegPath from "ffmpeg-static";
import fs from "fs";
import FormData from "form-data";
import { dbV as getVoiceType } from "./supabase.js";
import { execa } from "execa";
import { store as storeOnchain } from "./onchain.js";
import { aa, IK, IS } from "./config.js";

const INSIGHT_GENIE_API = "https://api.insightgenie.ai/";

async function getAuthHeaders() {
  try {
    const response = await axios.post(`${INSIGHT_GENIE_API}auth/authenticate`, {
      key: IK,
      secret: IS
    });
    return {
      Authorization: `Bearer ${response.data.token}`,
    };
  } catch (error) {
    console.error("Auth Error:", error);
    throw new Error("Failed to authenticate with InsightGenie");
  }
}

export async function print(email, phoneCode, phoneNumber) {
  try {
    const headers = await getAuthHeaders();
    const response = await axios.post(
      `${INSIGHT_GENIE_API}digital-footprint`,
      { email, phoneCode, phoneNumber },
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Print Error:", error);
    throw error;
  }
}

export async function iframe(gender, age) {
  try {
    const headers = await getAuthHeaders();
    const response = await axios.post(
      `${INSIGHT_GENIE_API}face-scan/generate-video-token`,
      {
        clientId: "igai",
        age: parseInt(age, 10),
        gender,
        showResults: "display",
        isVoiceAnalysisOn: false,
        forceFrontCamera: true,
      },
      { headers }
    );
    return response.data.videoIframeUrl;
  } catch (error) {
    console.error("Iframe Generate Error:", error);
    throw error;
  }
}

export async function voice(file, voiceTypeId, address, res) {
  try {
    const filename = `${address}_${Date.now()}_v.aac`;
    const tempPath = `tmp/${filename}`;
    const formData = new FormData();

    await execa(ffmpegPath, ["-i", file.path, "-c:a", "aac", tempPath]);

    const voiceType = await getVoiceType(voiceTypeId);

    formData.append("audio", fs.createReadStream(tempPath));
    formData.append("isSendingWebHookToInstitution", "false");
    formData.append("audioServiceType", voiceType);
    formData.append("channelType", "0");

    fs.unlink(file.path, (err) => { if (err) console.error("Cleanup error:", err); });

    const headers = await getAuthHeaders();

    const uploadResponse = await fetch(`${INSIGHT_GENIE_API}upload-file/audio`, {
      method: "POST",
      headers,
      body: formData,
    });
    const uploadData = await uploadResponse.json();
    const scoreId = uploadData.id;

    let resultData;

    while (true) {
      const scoreResponse = await fetch(`${INSIGHT_GENIE_API}get-score?id=${scoreId}`, {
        headers
      });
      const scoreData = await scoreResponse.json();

      console.log("Voice analysis status:", scoreData);

      if (scoreData.scoreId) {
        resultData = scoreData;
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    // Call storeOnchain but do not await if we want to immediately return to user.
    // However, storeOnchain uses a queue, so we just call it.
    storeOnchain(resultData, address, voiceTypeId, aa);

    fs.unlink(tempPath, (err) => { if (err) console.error("Cleanup error:", err); });

    return res.json(resultData);
  } catch (error) {
    console.error("Voice Analysis Error:", error);
    return res.status(500).json({ error: error.message || "Failed to process voice" });
  }
}
