import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('Update profile with incorrect current password', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/settings');
  await page.getByRole('textbox', { name: 'Mật khẩu hiện tại' }).click();
  await page.getByRole('textbox', { name: 'Mật khẩu hiện tại' }).fill('12345678aA!');

  await page.getByRole('textbox', { name: 'mật khẩu mới', exact: true }).click();
  await page.getByRole('textbox', { name: 'mật khẩu mới', exact: true }).fill('12345678aA@');

  await page.getByRole('textbox', { name: 'Xác nhận mật khẩu mới' }).click();
  await page.getByRole('textbox', { name: 'Xác nhận mật khẩu mới' }).fill('12345678aA@');

  await page.getByRole('button', { name: 'Lưu các thay đổi' }).click();
  await expect(page.locator('form')).toContainText('Mật khẩu hiện tại không đúng');
});