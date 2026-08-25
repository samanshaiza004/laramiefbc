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
    await expect(page.getByRole("heading", { name: "A church with room for your life.", level: 1 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Start here.", level: 2 })).toBeVisible();
    await expect(page.getByRole("link", { name: "Get directions" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Who we are Our story, beliefs, and the values that shape life together." })).toBeVisible();
  });

  test("has no critical axe violations on the homepage", async ({ page }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test("renders core routes without JavaScript", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();

    for (const route of ["/", "/visit", "/about", "/contact"]) {
      const response = await page.goto(route);
      expect(response?.ok()).toBe(true);
      await expect(page.locator("main#main-content")).toBeVisible();
    }

    await context.close();
  });
});
