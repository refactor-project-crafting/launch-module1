/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
type ImportMetaEnv = {
  readonly AUTH_SECRET: string;
  readonly AUTH_TRUST_HOST: string;
  readonly GITHUB_CLIENT_SECRET: string;
  readonly GITHUB_CLIENT_ID: string;
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly CALLBACK_URL: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};

declare namespace App {
  type Locals = {
    isLogged: boolean;
  };
}
