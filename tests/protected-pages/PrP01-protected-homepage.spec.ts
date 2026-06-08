import { test, expect } from '@playwright/test';

test('Protected homepage', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});