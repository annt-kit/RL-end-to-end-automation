import { test, expect } from '@playwright/test';

test('Protected Coaching page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/coaching');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});