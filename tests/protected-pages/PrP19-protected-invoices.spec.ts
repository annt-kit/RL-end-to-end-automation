import { test, expect } from '@playwright/test';

test('Protected Invoices page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/invoice');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});