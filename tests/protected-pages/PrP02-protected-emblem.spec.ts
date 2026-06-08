import { test, expect } from '@playwright/test';

test('Protected EMBLEM main page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/emblem');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});