import { describe, expect, test } from "bun:test";
import { getCmsContent, getCmsSource, isProductionEnvironment } from "../src/lib/cms/content";
import { CMS_CONTENT_QUERY } from "../src/lib/cms/queries";

describe("CMS source boundary", () => {
  test("defaults non-production environments to local fixtures", () => {
    expect(getCmsSource({ NODE_ENV: "test" })).toBe("local");
  });

  test("loads normalized synthetic content for tests", async () => {
    const content = await getCmsContent({ NODE_ENV: "test", CMS_SOURCE: "local" });
    expect(content.source).toBe("local");
    expect(content.settings.services.length).toBeGreaterThan(0);
    expect(content.settings.address.locality).toBe("Laramie");
    expect(content.settings.address.postalCode).toBe("82072");
    expect(content.settings.phoneDisplay).toBe("307-745-4106");
    expect(content.settings.email).toBe("Laramiefirstbaptist@gmail.com");
    expect(content.settings.services).toEqual(expect.arrayContaining([
      expect.objectContaining({ label: "Bible Study", time: "9:30–10:30 a.m." }),
      expect.objectContaining({ label: "Worship", time: "11:00 a.m.–12:00 p.m." }),
    ]));
    expect(content.visitPage.recurringGatherings).toEqual(expect.arrayContaining([
      expect.objectContaining({ title: "Women’s Bible Study", location: "Mary Burman’s residence", leader: "Jane Langdon" }),
      expect.objectContaining({ title: "Men’s Group", day: "Thursday", location: "Ivinson Hospital" }),
    ]));
    expect(content.visitPage.communionNote).toBe("Communion is observed on the first Sunday of each month.");
    expect(content.aboutPage.mission).toContain("Christ’s love — in both word and deed");
    expect(content.aboutPage.history[0].paragraphs[0]).toStartWith("Laramie sprang up alongside the Union Pacific Railroad in 1868.");
    expect(content.aboutPage.history[0].paragraphs[0]).not.toContain("arriving alongside the Union Pacific Railroad in 1868");
    expect(content.aboutPage.values.map((value) => value.heading)).toEqual(expect.arrayContaining(["Biblical Truth", "Love Our Neighbors"]));
    expect(content.aboutPage.beliefs.find((belief) => belief.heading === "Jesus")?.paragraphs[0]).toContain("today — ascended");
    expect(content.aboutPage.values.find((value) => value.heading === "Generosity")?.paragraphs[0]).toContain("life — extending");
    expect(content.sermons[0]?.speaker.name).toContain("SPEAKER TO BE CONFIRMED");
    expect(content.events[0]?.title).toContain("SYNTHETIC FIXTURE");
    expect(content.people.map((person) => person.name)).toEqual(expect.arrayContaining([
      "Lummi Kaping",
      "Morley Langdon",
      "Jackie Carter",
      "Phyllis Dunbar",
      "Maggie Harrop",
      "Dough Carr",
      "Yeseun",
      "Jane Langdon",
      "Lori Gonzalez",
      "Carol Carr",
      "John Stoll",
    ]));
    expect(content.people.find((person) => person.name === "Morley Langdon")?.photoKey).toBe("morleyAndJane");
    expect(content.people.find((person) => person.name === "Phyllis Dunbar")?.photoKey).toBe("phyllisDunbar");
    expect(content.people.find((person) => person.name === "Jackie Carter")?.photoKey).toBe("jackieCarter");
    expect(content.people.find((person) => person.name === "Lummi Kaping")?.committeeMemberships).toEqual(expect.arrayContaining(["Ministry Council", "Strategic Planning Committee"]));
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

  test("production content loading fails before local fixtures can be selected", async () => {
    let errorMessage = "";
    try {
      await getCmsContent({ NODE_ENV: "production", CMS_SOURCE: "local" });
    } catch (error) {
      errorMessage = error instanceof Error ? error.message : String(error);
    }

    expect(errorMessage).toContain("Production builds must use CMS_SOURCE=sanity");
  });

  test("keeps an event visible until its end time", () => {
    expect(CMS_CONTENT_QUERY).toContain("coalesce(end, start) >= now()");
    expect(CMS_CONTENT_QUERY).not.toContain("_key");
  });
});
