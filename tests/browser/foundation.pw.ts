import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("M2 homepage", () => {
  test("renders the skip link and primary CTAs", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main#main-content")).toBeVisible();
    await expect(page.getByRole("link", { name: "Plan Your Visit" }).first()).toHaveAttribute("href", "/visit");
    await expect(page.getByRole("link", { name: "Watch Latest Sermon" })).toHaveAttribute("href", "/sermons");

    await page.locator(".skip-link").focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
  });

  test("keeps mobile navigation keyboard-usable with native details", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const navigation = page.locator(".nav-details");
    const summary = navigation.locator("summary");

    await expect(summary).toBeVisible();
    await expect(navigation).not.toHaveAttribute("open", "");
    await summary.click();
    await expect(page.getByRole("link", { name: "Plan Your Visit" }).first()).toBeVisible();
  });

  test("enhances authored form errors without generating application content", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Send a message" }).click();
    await expect(page.locator("#name")).toHaveAttribute("aria-invalid", "true");
    await expect(page.locator("[data-error-summary]")).toBeVisible();
    await expect(page.locator("#name")).toBeFocused();
    await expect(page.locator("#name")).toHaveAttribute("aria-describedby", /name-error/);
  });

  test("has no horizontal overflow on a narrow viewport", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto("/");
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  });

  test("renders the supplied About content as semantic sections", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByRole("heading", { name: "Biblical Truth", level: 3 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Love Our Neighbors", level: 3 })).toBeVisible();
    await expect(page.getByText("Christ’s love — in both word and deed", { exact: false }).first()).toBeVisible();
  });

  test("puts newcomer information and service navigation in the homepage hierarchy", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "First Baptist Church", level: 1 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Sundays", level: 2 })).toBeVisible();
    await expect(page.getByRole("link", { name: "Get directions" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Who we are Our story, beliefs, and the values that shape life together." })).toBeVisible();
  });

  test("uses the supplied church photography with meaningful alternatives", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("main img");
    await expect(images).toHaveCount(13);
    const altText = await images.evaluateAll((elements) => elements.map((element) => element.getAttribute("alt")));
    expect(altText.every((alt) => Boolean(alt?.trim()))).toBe(true);
  });

  test("has no critical axe violations on the homepage", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("renders core routes without JavaScript", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();

    for (const route of ["/", "/visit", "/about", "/contact", "/connect", "/sermons", "/events", "/leadership", "/give", "/sermons/synthetic-sermon-preview"]) {
      const response = await page.goto(route);
      expect(response?.ok()).toBe(true);
      await expect(page.locator("main#main-content")).toBeVisible();
    }

    await context.close();
  });
});

test.describe("M4 dynamic content pages", () => {
  test.setTimeout(60_000);

  test("gives each M4 route a clear primary heading", async ({ page }) => {
    const routes = [
      ["/sermons", "Sermons"],
      ["/events", "Events"],
      ["/leadership", "Leadership"],
      ["/give", "Give"],
    ] as const;

    for (const [route, heading] of routes) {
      await page.goto(route);
      await expect(page.getByRole("heading", { name: heading, level: 1 })).toBeVisible();
    }
  });

  test("keeps M4 routes within the viewport on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 700 });

    for (const route of ["/sermons", "/events", "/leadership", "/give"]) {
      await page.goto(route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth), route).toBeLessThanOrEqual(320);
    }
  });

  test("has no critical axe violations on M4 routes", async ({ page }) => {
    for (const route of ["/sermons", "/events", "/leadership", "/give"]) {
      await page.goto(route);
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations, route).toEqual([]);
    }
  });

  test("links the local sermon fixture to a server-rendered detail page", async ({ page }) => {
    await page.goto("/sermons");
    await page.getByRole("link", { name: "Sermon details" }).click();
    await expect(page.getByRole("heading", { name: "[SYNTHETIC FIXTURE] Sermon preview", level: 1 })).toBeVisible();
  });

  test("keeps public internal links resolvable", async ({ page, request }) => {
    const routes = ["/", "/visit", "/about", "/connect", "/contact", "/sermons", "/events", "/leadership", "/give", "/sermons/synthetic-sermon-preview"];
    const internalLinks = new Set<string>();

    for (const route of routes) {
      await page.goto(route);
      const hrefs = await page.locator("a[href]").evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute("href")));
      for (const href of hrefs) {
        if (href?.startsWith("/") && !href.startsWith("//") && !href.startsWith("/.netlify/")) internalLinks.add(href.split("#")[0] ?? href);
      }
    }

    for (const href of internalLinks) {
      const response = await request.get(href);
      expect(response.ok(), href).toBe(true);
    }
  });
});

test.describe("M3 newcomer pages", () => {
  test.setTimeout(60_000);

  test("gives each newcomer route a clear primary heading", async ({ page }) => {
    const routes = [
      ["/visit", "Plan Your Visit"],
      ["/about", "About First Baptist Church"],
      ["/connect", "Find your way in."],
      ["/contact", "We’d be glad to hear from you."],
    ] as const;

    for (const [route, heading] of routes) {
      await page.goto(route);
      await expect(page.getByRole("heading", { name: heading, level: 1 })).toBeVisible();
    }
  });

  test("keeps newcomer routes within the viewport on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 700 });

    for (const route of ["/visit", "/about", "/connect", "/contact"]) {
      await page.goto(route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth), route).toBeLessThanOrEqual(320);
    }
  });

  test("has no critical axe violations on newcomer routes", async ({ page }) => {
    for (const route of ["/visit", "/about", "/connect", "/contact"]) {
      await page.goto(route);
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations, route).toEqual([]);
    }
  });
});
