import { test, expect } from '@playwright/test';

test('Protected Friends page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/emblem-matching/friends');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});