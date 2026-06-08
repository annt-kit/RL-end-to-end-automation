import { test, expect } from '@playwright/test';

test('Protected Checkout page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/cart/checkout');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});