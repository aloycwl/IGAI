import cors from "cors";
import express from "express";
import multer from "multer";
import path from "path";
import { aa, MA, GH } from "./config.js";
import { dbAuth as authenticate } from "./supabase.js";
import { fileURLToPath } from "url";
import { iframe as getIframe, print as getPrint, voice as processVoice } from "./ig.js";
import { ref as saveRef, store as storeOnchain, getInfo as getOnchainInfo } from "./onchain.js";
import { Magic } from "@magic-sdk/admin";
import { mm as migrate } from "./migrate.js";

const app = express();
const upload = multer({ dest: "tmp/" });

app.use(cors());
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(
  express.static(
    path.join(__dirname, "../../frontend/dist")
  )
);

app.get("/github", async (req, res, next) => {
  try {
    res.send(GH);
  } catch (error) {
    next(error);
  }
});

app.get("/iframe", authenticate, async (req, res, next) => {
  try {
    const result = await getIframe(req.query.g, req.query.y);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

app.get("/foot", authenticate, async (req, res, next) => {
  try {
    const result = await getPrint(req.query.e, req.query.c, req.query.n);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

app.get("/ref", async (req, res, next) => {
  try {
    await saveRef(req.headers.t, req.headers.f);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

app.get("/les", async (req, res, next) => {
  try {
    const magicClient = new Magic(MA);
    const metadata = await magicClient.users.getMetadataByToken(req.headers.m);
    res.send(metadata.publicAddress);
  } catch (error) {
    next(error);
  }
});

app.get("/info", async (req, res, next) => {
  try {
    const info = await getOnchainInfo(req.query.addr);
    res.send(info);
  } catch (error) {
    next(error);
  }
});

app.get("/m", async (req, res, next) => {
  try {
    await migrate();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

app.post("/store", async (req, res, next) => {
  try {
    await storeOnchain(req.body, req.headers.addr, req.headers.type, aa);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

app.post("/v", authenticate, upload.single("audio"), async (req, res, next) => {
  try {
    await processVoice(req.file, req.body.v, req.body.a, res);
  } catch (error) {
    next(error);
  }
});

app.get("/example", (req, res) => {
  res.sendFile(path.join(__dirname, "../example.html"));
});

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../frontend/dist/index.html")
  );
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Express Error:", err);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

export default app;

if (process.env.NODE_ENV !== "test") {
  app.listen(5000, () => {
  console.log("Server running on port 5000");
});
}
