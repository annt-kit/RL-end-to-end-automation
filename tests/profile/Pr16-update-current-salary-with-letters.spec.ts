import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('Update profile with current salary containing letters', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/settings');

  
  await page.getByRole('textbox', { name: 'Lương hiện tại' }).click();
  await page.getByRole('textbox', { name: 'Lương hiện tại' }).fill('f');
  
  await expect(page.getByRole('textbox', { name: 'Lương hiện tại' })).toHaveValue('');
});