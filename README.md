# First Baptist Church of Laramie

An Astro 7 static site for First Baptist Church of Laramie, Wyoming.

## Development

```sh
bun install
bun run dev
```

The development shell uses deliberately synthetic fixture content. It is marked in the page chrome and must not be treated as verified church information.

## Required checks

```sh
bun run lint
bun run check
bun test
bun run test:browser
bunx playwright install chromium
SITE_URL=http://localhost:4321 CMS_SOURCE=local SANITY_PROJECT_ID=local-development SANITY_DATASET=production bun run build
```

Production builds require `SITE_URL`, `SANITY_PROJECT_ID`, `SANITY_DATASET`, and `CMS_SOURCE=sanity`. A production build using local fixtures fails by design.

The contact function requires the server-only `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `CONTACT_EMAIL_API_KEY` variables. It sends through Resend, rejects oversized or malformed requests, and fails closed when delivery is not configured.

## Publishing model

The public site is deployed as static HTML on Netlify. The intended content path is:

`Sanity publish → Netlify build hook → Astro fetches and validates → successful build → atomic deployment`

The separate Studio in `studio/` is deployed to Sanity and is not embedded in the public application.

The supplied About copy and church photography are ready for staff review, but no mutable sermon, event, ministry, leadership, giving, contact, or service facts are treated as production content until they are published and confirmed in Sanity.

## Current milestone

M4 extends the approved M2 visual system to Sermons, Events, Leadership, and Give. Structured content is fetched through one validated Sanity boundary; local fixtures remain clearly marked for development and are rejected in production. The separate Studio contains singleton page documents and repeatable collections for staff editing.
