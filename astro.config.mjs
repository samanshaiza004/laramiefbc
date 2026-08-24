import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";

const mode = process.env.NODE_ENV ?? "development";
const env = loadEnv(mode, process.cwd(), "");
const buildMode = env.BUILD_MODE ?? process.env.BUILD_MODE;
const isProductionBuild = mode === "production" && process.argv.includes("build") && buildMode !== "development";
const siteUrl = env.SITE_URL ?? process.env.SITE_URL;
const sanityProjectId = env.SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;
const sanityDataset = env.SANITY_DATASET ?? process.env.SANITY_DATASET;

if (isProductionBuild && !siteUrl) {
  throw new Error("SITE_URL is required for production builds.");
}

if (isProductionBuild && (!sanityProjectId || !sanityDataset)) {
  throw new Error("SANITY_PROJECT_ID and SANITY_DATASET are required for production builds.");
}

export default defineConfig({
  site: siteUrl ?? "http://localhost:4321",
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    sanity({
      projectId: sanityProjectId ?? "local-development",
      dataset: sanityDataset ?? "production",
      useCdn: false,
    }),
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith("/admin"),
      serialize(item) {
        const url = new URL(item.url);
        if (url.pathname !== "/") {
          url.pathname = url.pathname.replace(/\/$/, "");
        }
        item.url = url.href;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
