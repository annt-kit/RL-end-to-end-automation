import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('Update profile with invalid phone number', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/settings');
  await page.getByRole('textbox', { name: 'Số điện thoại' }).click();
  await page.getByRole('textbox', { name: 'Số điện thoại' }).fill('abcvdefghu');

  await expect(page.getByRole('textbox', { name: 'Số điện thoại' })).toHaveValue('');
});