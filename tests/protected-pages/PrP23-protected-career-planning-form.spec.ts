import { test, expect } from '@playwright/test';

test('Protected Career Planning Form page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/career-planning/form');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});