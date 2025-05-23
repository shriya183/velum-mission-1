
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ubhqbclheuodqpqvvlpw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViaHFiY2xoZXVvZHFwcXZ2bHB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyNTc0MTksImV4cCI6MjA2MTgzMzQxOX0.RVH6mkgcgJrPVtcHJJldWSkg4lioL-XA_uMCCr_PkDk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
