import { createClient } from "@supabase/supabase-js";
import { su, SB } from "./config.js";

const supabaseClient = createClient(su, SB);

export const dbAuth = async (req, res, next) => {
  try {
    const authKey = req.headers.auth;
    const { data, error } = await supabaseClient
      .from("keys")
      .select("credit")
      .eq("k", authKey)
      .single();

    if (error) {
      console.error("Supabase Auth Error:", error);
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!data || typeof data.credit !== "number" || data.credit <= 0) {
      return res.status(401).json({ error: "Insufficient credits or invalid key" });
    }

    await supabaseClient
      .from("keys")
      .update({ credit: data.credit - 1 })
      .eq("k", authKey);

    next();
  } catch (error) {
    console.error("Unexpected Auth Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export async function dbIGAI(cid, address, type) {
  try {
    const { error } = await supabaseClient
      .from("igai")
      .insert([{ cid, addr: address, type }]);

    if (error) throw error;
  } catch (error) {
    console.error("dbIGAI Error:", error);
  }
}

export async function dbRef(toAddr, fromAddr) {
  try {
    const { error } = await supabaseClient
      .from("ref")
      .insert([{ to: toAddr, from: fromAddr }]);

    if (error) throw error;
  } catch (error) {
    console.error("dbRef Error:", error);
  }
}

export async function dbNew(address, type) {
  try {
    let query = supabaseClient.from("igai").select("cid").eq("addr", address);

    if (type > 2) {
      query = query.gt("type", 2);
    } else {
      query = query.eq("type", type);
    }

    const { data, error } = await query.limit(1).single();

    if (error && error.code !== 'PGRST116') { // PGRST116 is the code for 'no rows returned'
      console.error("dbNew Query Error:", error);
    }

    return !data;
  } catch (error) {
    console.error("dbNew Exception:", error);
    return false;
  }
}

export async function dbTo(address) {
  try {
    const { data, error } = await supabaseClient
      .from("ref")
      .select("to")
      .eq("to", address)
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
       console.error("dbTo Query Error:", error);
    }

    return !data;
  } catch (error) {
    console.error("dbTo Exception:", error);
    return false;
  }
}

export async function dbV(id) {
  try {
    const { data, error } = await supabaseClient
      .from("vtype")
      .select("type")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data.type;
  } catch (error) {
    console.error("dbV Error:", error);
    throw error;
  }
}

export async function dbCID() {
  try {
    const { data, error } = await supabaseClient
      .from("igai")
      .select("cid")
      .or("m.is.null,m.neq.true")
      .order("id", { ascending: true })
      .limit(1)
      .maybeSingle();

    if (error) throw error;
    if (!data) return null;

    const cid = data.cid;

    await supabaseClient
      .from("igai")
      .update({ m: true })
      .eq("cid", cid);
    
    return cid;
  } catch (error) {
    console.error("dbCID Error:", error);
    throw error;
  }
}

export async function dbGetRef(address) {
  try {
    const [fromResult, toResult] = await Promise.all([
      supabaseClient.from("ref").select("from").ilike("to", address).limit(1).single(),
      supabaseClient.from("ref").select("to").ilike("from", address),
    ]);

    return {
      from: fromResult.data?.from || null,
      to: toResult.data ? toResult.data.map((row) => row.to) : [],
    };
  } catch (error) {
    console.error("dbGetRef Error:", error);
    throw error;
  }
}
