import { test, expect } from '@playwright/test';

test('Forgot password with existing email', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/forgot-password');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('an.nt@kit-group.net');
  await page.getByRole('button', { name: 'Gửi liên kết đặt lại' }).click();
  await expect(page.locator('body')).toContainText('Chúng tôi đã gửi liên kết đặt lại mật khẩu đến an.nt@kit-group.net. Vui lòng kiểm tra hộp thư và làm theo hướng dẫn.');
});