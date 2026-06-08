import { test, expect } from '@playwright/test';

test('Protected Career Planning Reflect Result page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/career-planning/reflect');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});