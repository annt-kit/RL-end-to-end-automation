import { test, expect } from '@playwright/test';

test('Protected EMBLEM Assessment Result page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/career-result');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});