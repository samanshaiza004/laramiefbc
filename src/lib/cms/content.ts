import { CMS_CONTENT_QUERY } from "./queries";
import { createSanityClient } from "./client";
import { localContent } from "./local-content";
import { cmsContentSchema, type ParsedCmsContent } from "./schemas";
import type { CmsContent, CmsSource, RuntimeEnv } from "./types";

type ViteImportMeta = ImportMeta & {
  env?: Record<string, string | undefined>;
};

function getViteEnv(): Record<string, string | undefined> {
  return (import.meta as ViteImportMeta).env ?? {};
}

export function getRuntimeEnv(overrides?: RuntimeEnv): RuntimeEnv {
  const viteEnv = getViteEnv();
  return {
    NODE_ENV: process.env.NODE_ENV ?? viteEnv.NODE_ENV,
    MODE: process.env.MODE ?? viteEnv.MODE,
    BUILD_MODE: process.env.BUILD_MODE ?? viteEnv.BUILD_MODE,
    CMS_SOURCE: process.env.CMS_SOURCE ?? viteEnv.CMS_SOURCE,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID ?? viteEnv.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET ?? viteEnv.SANITY_DATASET,
    ...overrides,
  };
}

export function isProductionEnvironment(env: RuntimeEnv): boolean {
  return env.BUILD_MODE !== "development" && (env.NODE_ENV === "production" || env.MODE === "production");
}

export function getCmsSource(env: RuntimeEnv = getRuntimeEnv()): CmsSource {
  const production = isProductionEnvironment(env);
  const requested = env.CMS_SOURCE?.trim() || (production ? "sanity" : "local");

  if (requested !== "local" && requested !== "sanity") {
    throw new Error(`Unsupported CMS_SOURCE "${requested}". Use "local" or "sanity".`);
  }

  if (production && requested !== "sanity") {
    throw new Error("Production builds must use CMS_SOURCE=sanity; local fixtures are not permitted.");
  }

  return requested;
}

function parseContent(content: CmsContent): ParsedCmsContent {
  return cmsContentSchema.parse(content);
}

function missingDocumentMessage(key: string): string {
  return `Sanity document "${key}" is missing. Required singleton content must be published before a production build.`;
}

export async function getCmsContent(overrides?: RuntimeEnv): Promise<ParsedCmsContent> {
  const env = getRuntimeEnv(overrides);
  const source = getCmsSource(env);

  if (source === "local") {
    return parseContent(localContent);
  }

  const client = createSanityClient(env);
  const content = await client.fetch<Partial<CmsContent>>(CMS_CONTENT_QUERY);

  for (const key of ["settings", "homepage", "visitPage", "aboutPage", "givingPage"] as const) {
    if (!content[key]) throw new Error(missingDocumentMessage(key));
  }

  return parseContent({
    source: "sanity",
    settings: content.settings!,
    homepage: content.homepage!,
    visitPage: content.visitPage!,
    aboutPage: content.aboutPage!,
    givingPage: content.givingPage!,
  });
}
