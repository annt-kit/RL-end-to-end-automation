import { test, expect } from '@playwright/test';

test('Protected EMBLEM Moments page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/emblem/moments');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});