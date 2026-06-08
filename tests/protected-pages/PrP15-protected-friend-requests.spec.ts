import { test, expect } from '@playwright/test';

test('Protected Friend Requests page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/emblem-matching/friends/requests');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});