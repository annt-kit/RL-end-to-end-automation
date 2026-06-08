import { test, expect } from '@playwright/test';

test('Protected Career Planning Choose Result page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/career-planning/choose');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});