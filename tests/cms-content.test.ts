import { describe, expect, test } from "bun:test";
import { getCmsContent, getCmsSource, isProductionEnvironment } from "../src/lib/cms/content";

describe("CMS source boundary", () => {
  test("defaults non-production environments to local fixtures", () => {
    expect(getCmsSource({ NODE_ENV: "test" })).toBe("local");
  });

  test("loads normalized synthetic content for tests", async () => {
    const content = await getCmsContent({ NODE_ENV: "test", CMS_SOURCE: "local" });
    expect(content.source).toBe("local");
    expect(content.settings.services.length).toBeGreaterThan(0);
    expect(content.settings.address.locality).toBe("Laramie");
  });

  test("production cannot select local fixtures", () => {
    expect(() => getCmsSource({ NODE_ENV: "production", CMS_SOURCE: "local" })).toThrow(
      "Production builds must use CMS_SOURCE=sanity",
    );
  });

  test("production defaults to Sanity instead of silently using fixtures", () => {
    expect(isProductionEnvironment({ NODE_ENV: "production" })).toBe(true);
    expect(getCmsSource({ NODE_ENV: "production" })).toBe("sanity");
  });
});
