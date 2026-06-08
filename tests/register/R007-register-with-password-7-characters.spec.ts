import { test, expect } from '@playwright/test';

test('Register with password that has 7 characters', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/sign-up');
  await page.getByRole('textbox', { name: 'Họ và tên' }).click();
  await page.getByRole('textbox', { name: 'Họ và tên' }).fill('KIT Tester');
  await page.getByRole('combobox', { name: 'Bạn là?' }).click();
  await page.getByRole('option', { name: 'Sinh viên' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('an.nt@kit-group.net');
  await page.getByRole('textbox', { name: 'Mật khẩu', exact: true }).click();
  await page.getByRole('textbox', { name: 'Mật khẩu', exact: true }).fill('1234aA@');
  await page.getByRole('textbox', { name: 'Xác nhận mật khẩu' }).click();
  await page.getByRole('textbox', { name: 'Xác nhận mật khẩu' }).fill('1234aA@');
  await page.getByRole('checkbox', { name: 'Tôi đồng ý với Điều khoản sử' }).click();
  await page.getByRole('checkbox', { name: 'Tôi xác nhận đã đọc và Đồng' }).click();
  await page.getByRole('button', { name: 'Đăng ký' }).click();
  await expect(page.locator('form')).toContainText('Mật khẩu cần bao gồm độ dài trên 8 ký tự, chữ hoa, chữ thường, số và kí tự đặc biệt');
});