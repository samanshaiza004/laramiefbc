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
    expect(content.aboutPage.mission).toContain("Christ’s love — in both word and deed");
    expect(content.aboutPage.history[0].paragraphs[0]).toStartWith("Laramie sprang up alongside the Union Pacific Railroad in 1868.");
    expect(content.aboutPage.history[0].paragraphs[0]).not.toContain("arriving alongside the Union Pacific Railroad in 1868");
    expect(content.aboutPage.values.map((value) => value.heading)).toEqual(expect.arrayContaining(["Biblical Truth", "Love Our Neighbors"]));
    expect(content.aboutPage.beliefs.find((belief) => belief.heading === "Jesus")?.paragraphs[0]).toContain("today — ascended");
    expect(content.aboutPage.values.find((value) => value.heading === "Generosity")?.paragraphs[0]).toContain("life — extending");
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
