const { test, expect } = require('@playwright/test');

test('visual comparison (full page)', async ({ page }) => {
  // Production version
  await page.goto('https://docs.astro.build/en/tutorial/0-introduction/');
  await expect(page).toHaveScreenshot('baseline.png', { fullPage: true });

  // Local production-like build (run `astro preview`)
  await page.goto('http://localhost:4321/en/tutorial/0-introduction/');
  await expect(page).toHaveScreenshot('baseline.png', { fullPage: true });
});
