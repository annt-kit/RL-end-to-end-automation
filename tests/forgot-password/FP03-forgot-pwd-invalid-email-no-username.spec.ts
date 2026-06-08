import { test, expect } from '@playwright/test';

test('Forgot password with email that has no username', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/forgot-password');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('@kit-group.net');
  await page.getByRole('button', { name: 'Gửi liên kết đặt lại' }).click();
  await expect(page.locator('span')).toContainText('Vui lòng nhập địa chỉ email hợp lệ.');
});