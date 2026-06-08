import { test, expect } from '@playwright/test';

test('Forgot password with non-existing email', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/forgot-password');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('non-existing@kit-group.net');
  await page.getByRole('button', { name: 'Gửi liên kết đặt lại' }).click();
  await expect(page.getByRole('paragraph')).toContainText('Chưa có tài khoản liên kết với email này. Vui lòng tạo tài khoản mới hoặc nhập một email khác để khôi phục mật khẩu');
});