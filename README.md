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

## Publishing model

The public site is deployed as static HTML on Netlify. The intended content path is:

`Sanity publish → Netlify build hook → Astro fetches and validates → successful build → atomic deployment`

The separate Studio in `studio/` is deployed to Sanity and is not embedded in the public application.

## Current milestone

M3 extends the approved M2 visual system across Visit, About, Connect, and Contact. The supplied church photography is used throughout the public foundation; service times and other mutable church facts remain clearly marked until verified.
