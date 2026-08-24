import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/schemaTypes";
import { studioStructure } from "./src/structure";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET ?? process.env.SANITY_DATASET ?? "production";

export default defineConfig({
  name: "first_baptist_laramie",
  title: "First Baptist Church of Laramie",
  projectId: projectId ?? "replace-with-sanity-project-id",
  dataset,
  plugins: [structureTool({ structure: studioStructure }), visionTool()],
  schema: { types: schemaTypes },
});
