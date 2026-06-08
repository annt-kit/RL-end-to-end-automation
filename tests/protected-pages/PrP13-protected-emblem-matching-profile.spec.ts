import { test, expect } from '@playwright/test';

test('Protected EMBLEM Matching Profile page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/emblem-matching/profile');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});