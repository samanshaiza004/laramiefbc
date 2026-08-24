import { normalizePath } from "../site-config";

export function canonicalUrl(site: URL | undefined, pathname: string): URL {
  if (!site) {
    throw new Error("Astro.site is required for canonical URL generation.");
  }

  return new URL(normalizePath(pathname), site);
}

export function absoluteAssetUrl(site: URL | undefined, path: string): URL {
  if (!site) {
    throw new Error("Astro.site is required for absolute asset URLs.");
  }

  return new URL(path.startsWith("/") ? path : `/${path}`, site);
}
