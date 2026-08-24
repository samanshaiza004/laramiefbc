/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string;
  readonly CMS_SOURCE?: "local" | "sanity";
  readonly SANITY_PROJECT_ID?: string;
  readonly SANITY_DATASET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
