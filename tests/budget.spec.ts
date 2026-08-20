import { test, expect } from "@playwright/test";
test("budget dashboard is reachable", async ({ page }) => { await page.goto("/"); await expect(page).toHaveTitle(/Example Domain/); });