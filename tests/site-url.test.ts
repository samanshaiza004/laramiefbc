import { describe, expect, test } from "bun:test";
import { absoluteAssetUrl, canonicalUrl } from "../src/lib/site-url";

const site = new URL("https://example.test");

describe("canonical URL helpers", () => {
  test("normalizes route paths against Astro.site", () => {
    expect(canonicalUrl(site, "/visit/").href).toBe("https://example.test/visit");
    expect(canonicalUrl(site, "/").href).toBe("https://example.test/");
  });

  test("creates absolute asset URLs from Astro.site", () => {
    expect(absoluteAssetUrl(site, "/og-default.svg").href).toBe("https://example.test/og-default.svg");
  });

  test("fails when Astro.site is unavailable", () => {
    expect(() => canonicalUrl(undefined, "/")).toThrow("Astro.site is required");
  });
});
