import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

export const signInWithGitHub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: window.location.origin,
    },
  });

  if (error) {
    throw error;
  }

  return data;
};

export const getAuthenticatedUser = async () => {
  if (window.location.host.includes("localhost")) {
    return {
      user_metadata: {
        user_name: "the-refactor-project",
      },
    };
  }

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error obteniendo usuario:", error);
    return null;
  }

  return data?.user;
};

export const signOut = async () => {
  await supabase.auth.signOut();
  document.cookie =
    "trp_username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

export const setUsernameCookie = (username: string) => {
  document.cookie = `trp_username=${username}; path=/; max-age=604800`;
};
