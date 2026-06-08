import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('Update profile with one password field empty', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/settings');
  await page.getByRole('textbox', { name: 'Mật khẩu hiện tại' }).click();
  await page.getByRole('textbox', { name: 'Mật khẩu hiện tại' }).fill('12345678aA#');

  await page.getByRole('button', { name: 'Lưu các thay đổi' }).click();

  await expect(page.locator('form')).toContainText('Bạn cần nhập mật khẩu mới để tiếp tục đổi mật khẩu.');
});