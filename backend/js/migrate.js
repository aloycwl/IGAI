import { dbCID } from "./supabase.js";

export async function mm(limit = 1) {
  try {
    for (let i = 0; i < limit; i++) {
      const cid = await dbCID();
      console.log("Migrated CID:", cid);
    }
    return { success: true };
  } catch (error) {
    console.error("Error during migration and minting:", error);
    throw error;
  }
}
