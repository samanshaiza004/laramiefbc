import { defineCliConfig } from "sanity/cli";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET ?? process.env.SANITY_DATASET ?? "production";

export default defineCliConfig({
  api: {
    projectId: projectId ?? "7mbbnclt",
    dataset,
  },
  deployment: {
    appId: "likvsef2ab6uhsip6zu9gvj7",
  },
});
