import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// These environment variables will be available after connecting to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please connect to Supabase first.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);