# Foundation architecture

## Runtime boundaries

- Astro generates static HTML. The public app has no React, Vue, Svelte, SPA router, or client state framework.
- Tailwind owns appearance. MannerHTML owns only narrow authored interaction behavior.
- Sanity Studio is a separate React application deployed independently to Sanity.

## Canonical URL authority

`SITE_URL` is loaded by Vite in `astro.config.mjs` and becomes Astro’s `site` value. Components and endpoints use `Astro.site`; CMS data never supplies the public origin.

## CMS boundary

`src/lib/cms/` owns the Sanity client, GROQ query, local fixture source, runtime validation, and normalized application types. Pages consume `CmsContent` and `ChurchSettings`, not Sanity query shapes.

Production is fail-closed: missing Sanity configuration, local source selection, missing singleton documents, and malformed data stop the candidate build.

## Publishing

Sanity publish triggers a Netlify build hook. The candidate build fetches published content with `useCdn: false`, validates it, and deploys atomically only after the build succeeds. A failed candidate does not replace the currently deployed site.

## Contact security

`netlify/functions/contact.ts` validates the form again on the server, enforces request and field-size bounds, uses a honeypot, returns generic HTML responses, keeps delivery credentials server-side, and never logs submitted message bodies. Delivery uses the configured email provider only when all required server environment variables are present; otherwise the endpoint fails closed.
