import { createClient } from '@supabase/supabase-js';

const rawUrl = import.meta.env.VITE_SUPABASE_URL;
const rawKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isValidUrl = (url) => {
  try {
    return Boolean(url && (url.startsWith('https://') || url.startsWith('http://')));
  } catch {
    return false;
  }
};

let client = null;

if (isValidUrl(rawUrl) && rawKey && rawKey !== 'placeholder-anon-key') {
  try {
    client = createClient(rawUrl, rawKey);
  } catch (e) {
    console.warn('Supabase initialization fallback to demo mode:', e);
  }
}

if (!client) {
  // Safe fallback client so the application never crashes in demo / preview mode
  const createMockQuery = () => {
    const chainable = {
      select: () => chainable,
      order: () => chainable,
      eq: () => chainable,
      limit: () => chainable,
      single: async () => ({ data: null, error: null }),
      insert: async () => ({ data: [], error: null }),
      update: async () => ({ data: [], error: null }),
      delete: async () => ({ data: [], error: null }),
      then: (resolve) => resolve({ data: [], error: null })
    };
    return chainable;
  };

  client = {
    from: () => createMockQuery(),
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: async () => ({ data: { user: null }, error: new Error('Modo demo activo') }),
      signOut: async () => ({ error: null })
    }
  };
}

export const supabase = client;
