import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('Update profile with 9-character phone number', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/settings');

  await page.getByRole('textbox', { name: 'Số điện thoại' }).click();
  await page.getByRole('textbox', { name: 'Số điện thoại' }).fill('091234567');

  await page.getByRole('button', { name: 'Lưu các thay đổi' }).click();

  await expect(page.locator('form')).toContainText('Số điện thoại phải bắt đầu bằng số 0 và có 10 hoặc 11 chữ số.');
});