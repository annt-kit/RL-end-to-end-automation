import { test, expect } from '@playwright/test';

test('Login with no email and password', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/login');
  await page.getByRole('button', { name: 'Đăng nhập', exact: true }).click();
  await expect(page.locator('form')).toContainText('Vui lòng nhập email');
  await page.getByText('Mật khẩu phải có ít nhất 8 ký tự').click();
  await expect(page.locator('form')).toContainText('Mật khẩu phải có ít nhất 8 ký tự.');
});