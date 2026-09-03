# Sanity content migration

The public site now has the production content boundary and the separate Studio schema. Migration is intentionally a staff-reviewed step; the local fixtures are synthetic and must not be imported automatically.

## Order of operations

1. Set `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` for the separate `studio/` project.
2. Publish the five singleton documents using the approved church copy and confirmed contact/service facts: Site settings, Homepage, Visit page, About page, and Giving page.
3. Add and publish people before sermons so sermon speaker references resolve.
4. Add sermon series, sermons, events, ministries, and announcements only from church-approved source material.
5. Add meaningful alternative text to every uploaded image. The Studio blocks publishing an image without it.
6. Set the Astro build environment to `CMS_SOURCE=sanity`, `SANITY_PROJECT_ID`, `SANITY_DATASET`, and the confirmed `SITE_URL`.
7. Run the public build. Missing singletons, unresolved required references, missing image alternatives, malformed fields, or invalid URLs must fail the candidate build.

## Publish path

`Sanity publish → Netlify build hook → Astro fetches published content with useCdn=false → Zod validation → successful static build → atomic deployment`

No fixture-to-Sanity import script is included because the current source contains placeholders and mutable facts that require leadership approval. Once the content is approved, staff can enter it through the explicit Studio collections without carrying over synthetic values.
