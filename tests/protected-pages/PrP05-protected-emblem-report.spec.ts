import { test, expect } from '@playwright/test';

test('Protected EMBLEM Report page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/emblem/report');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});