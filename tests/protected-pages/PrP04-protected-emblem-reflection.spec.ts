import { test, expect } from '@playwright/test';

test('Protected EMBLEM Reflection page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/emblem/reflection');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});