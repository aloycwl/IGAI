import { ci, cr, pr, PK, D, M } from "./config.js";
import { create as createW3upClient } from "@web3-storage/w3up-client";
import { dbIGAI, dbTo, dbRef, dbGetRef } from "./supabase.js";
import { NonceManager } from "@ethersproject/experimental";
import ethers from "ethers";

let currentNonce = null;
let nonceLock = Promise.resolve();

const { providers, Contract, Wallet } = ethers;
const provider = new providers.JsonRpcProvider(pr);
const wallet = new Wallet(PK, provider);
const nonceManager = new NonceManager(wallet);

const uploadQueue = [];
const w3upClient = await createW3upClient();

const deductContract = new Contract(ci, ["function deduct(address, address)"], wallet).connect(nonceManager);
const tokenContract = new Contract(
  cr,
  ["function balanceOf(address) view returns (uint256)"],
  provider
);

let isProcessingQueue = false;

const authenticateW3up = async () => {
  if (!w3upClient.currentSpace()) {
    await w3upClient.login(M);
    await w3upClient.setCurrentSpace(D);
  }
};

export async function ref(toAddress, fromAddress) {
  try {
    const isNewTo = await dbTo(toAddress);
    if (isNewTo && toAddress !== fromAddress) {
      await dbRef(toAddress, fromAddress);

      const setRefContract = new Contract(ci, ["function setRef(address, address)"], provider).connect(nonceManager);
      await setRefContract.setRef(toAddress, fromAddress);
    }
  } catch (error) {
    console.error("Ref Error:", error);
    throw error;
  }
}

export async function getInfo(address) {
  try {
    const [balance, refInfo] = await Promise.all([
      tokenContract.balanceOf(address),
      dbGetRef(address)
    ]);
    return { balance: balance.toString(), to: refInfo.from || null, from: refInfo.to || [] };
  } catch (error) {
    console.error("getInfo Error:", error);
    throw error;
  }
}

async function getNextNonce() {
  await nonceLock;
  let releaseLock;
  nonceLock = new Promise((resolve) => {
    releaseLock = resolve;
  });
  try {
    if (currentNonce === null) {
      currentNonce = await provider.getTransactionCount(wallet.address, "pending");
      console.log("Fetched initial nonce:", currentNonce);
    }
    const nonceToUse = currentNonce;
    currentNonce++;
    return nonceToUse;
  } finally {
    releaseLock();
  }
}

export async function processQueue() {
  if (isProcessingQueue) return;
  isProcessingQueue = true;

  while (uploadQueue.length > 0) {
    const task = uploadQueue[0]; // Peek at task instead of shifting right away
    const { data, receiverAddress, recordType, adminAddress, retries = 0 } = task;

    try {
      await authenticateW3up();

      const uploadPromise = (async () => {
        const file = new File([JSON.stringify(data)], "data.json");
        const uploadResult = await w3upClient.uploadFile(file);
        const cid = uploadResult.toString();
        await dbIGAI(cid, receiverAddress, recordType);
      })();

      let txPromise = Promise.resolve();

      // Blockchain code is commented out in original file as well
      // try {
      //   const nonce = await getNextNonce();
      //   const tx = await deductContract.deduct(receiverAddress, adminAddress, { nonce });
      //   await tx.wait(1);
      // } catch (err) {
      //   currentNonce = await provider.getTransactionCount(wallet.address, "pending");
      //   throw err;
      // }

      await Promise.all([uploadPromise, txPromise]);
      uploadQueue.shift(); // Remove task only on success
    } catch (error) {
      console.error(new Date().toISOString(), "Queue task failed:", error);

      if (retries >= 3) {
        console.error("Task exceeded max retries. Dropping task.");
        uploadQueue.shift(); // Drop task after 3 retries to prevent blocking queue indefinitely
      } else {
        task.retries = retries + 1;
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }
    console.log("Queue left:", uploadQueue.length);
  }

  isProcessingQueue = false;
}

export async function store(data, receiverAddress, recordType, adminAddress) {
  uploadQueue.push({ data, receiverAddress, recordType, adminAddress, retries: 0 });
  processQueue().catch(err => console.error("Unhandled error in queue processing:", err));
}
