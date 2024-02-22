import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");
  console.log("Auth code:", authCode);
  if (!authCode) {
    return new Response("No se proporcionó ningún código", { status: 401 });
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  console.log(data);

  if (error) {
    return new Response(error.message, { status: 401 });
  }

  const { data: dbData, error: dbError } = await supabase
    .from("users")
    .select("*");

  if (dbError) {
    return new Response("MarioError: " + dbError.message, { status: 500 });
  }

  if (
    !dbData.some((user) => {
      return user.username === data.user.user_metadata.user_name;
    })
  ) {
    return new Response("Sin autorización", { status: 401 });
  }

  const { access_token, refresh_token } = data.session;

  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  return redirect("/");
};
