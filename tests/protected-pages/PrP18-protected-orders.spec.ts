import { test, expect } from '@playwright/test';

test('Protected Orders page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/orders');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});