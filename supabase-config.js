// Ganti dengan kredensial project Supabase Anda
const supabaseUrl = "https://pgonbbemrnebjlxibtyn.supabase.co";
const supabaseAnonKey = "sb_publishable_wYEWBIErInkIGgow7aPqJA_mIx6d2Fk";

window.supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
