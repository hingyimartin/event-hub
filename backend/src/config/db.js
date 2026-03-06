import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY in .env');
  process.exit(1);
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export const connectDB = () => {
  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase config missing');
    process.exit(1);
  }
  console.log('Supabase client initialized');
};
