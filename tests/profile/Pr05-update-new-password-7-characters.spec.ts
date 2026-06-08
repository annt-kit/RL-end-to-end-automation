import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('Update profile with new password of 7 characters', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/settings');
  await page.getByRole('textbox', { name: 'Mật khẩu hiện tại' }).click();
  await page.getByRole('textbox', { name: 'Mật khẩu hiện tại' }).fill('12345678aA#');

  await page.getByRole('textbox', { name: 'mật khẩu mới', exact: true }).click();
  await page.getByRole('textbox', { name: 'mật khẩu mới', exact: true }).fill('123abA@');

  await page.getByRole('textbox', { name: 'Xác nhận mật khẩu mới' }).click();
  await page.getByRole('textbox', { name: 'Xác nhận mật khẩu mới' }).fill('123abA@');

  await page.getByRole('button', { name: 'Lưu các thay đổi' }).click();
  await expect(page.locator('form')).toContainText('Mật khẩu mới phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.');
});