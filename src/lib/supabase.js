import { createClient } from '@supabase/supabase-js';

// These should be in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Mock client for local development if keys are missing
const mockSupabase = {
  auth: {
    signInWithPassword: async () => ({ data: { user: { id: '1' } }, error: null }),
    signUp: async () => ({ data: { user: { id: '1' } }, error: null }),
    signOut: async () => ({ error: null }),
  },
  from: () => ({
    select: () => ({
      eq: () => ({ data: [], error: null }),
    }),
    insert: () => ({ data: null, error: null }),
  }),
};

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : mockSupabase;
