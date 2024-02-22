import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ redirect }) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: import.meta.env.CALLBACK_URL,
    },
  });

  if (error) {
    return new Response(error.message, { status: 401 });
  }

  return redirect(data.url);
};
