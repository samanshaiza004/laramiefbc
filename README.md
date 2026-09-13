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
SITE_URL=http://localhost:4321 BUILD_MODE=development CMS_SOURCE=local SANITY_PROJECT_ID=local-development SANITY_DATASET=production bun run build
```

Production builds require `SITE_URL`, `SANITY_PROJECT_ID`, `SANITY_DATASET`, and `CMS_SOURCE=sanity`. A production build using local fixtures fails by design.

The contact function requires the server-only `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `CONTACT_EMAIL_API_KEY` variables. It sends through Resend, rejects oversized or malformed requests, and fails closed when delivery is not configured.

## Publishing model

The public site is deployed as static HTML on Netlify. The intended content path is:

`Sanity publish → Netlify build hook → Astro fetches and validates → successful build → atomic deployment`

The separate Studio in `studio/` is deployed to Sanity and is not embedded in the public application.

The supplied About copy, church photography, contact details, Sunday schedule, recurring gatherings, communion practice, and leadership roster are represented in the local preview fixture for staff review. They are not a production source; the live site still requires the corresponding Sanity documents to be published and validated.

## Current milestone

M5 hardening is complete; this follow-up content pass adds the supplied contact, schedule, gathering, communion, leadership, committee, and portrait data to the local migration fixture. Structured content is fetched through one validated Sanity boundary; local fixtures remain clearly marked for development and are rejected in production. The separate Studio contains singleton page documents and repeatable collections for staff editing.
