import { createClient } from "@sanity/client";
import type { RuntimeEnv } from "./types";

export function createSanityClient(env: RuntimeEnv) {
  const projectId = env.SANITY_PROJECT_ID?.trim();
  const dataset = env.SANITY_DATASET?.trim();

  if (!projectId || !dataset) {
    throw new Error("SANITY_PROJECT_ID and SANITY_DATASET are required when CMS_SOURCE=sanity.");
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: "2025-01-01",
    useCdn: false,
    perspective: "published",
  });
}
