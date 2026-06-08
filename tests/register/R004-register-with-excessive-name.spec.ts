import { test, expect } from '@playwright/test';

test('Register with name exceeding 255 characters', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/sign-up');
  await page.getByRole('textbox', { name: 'Họ và tên' }).click();
  await page.getByRole('textbox', { name: 'Họ và tên' }).fill('KIT System Solutions Vietnam 1 KIT System Solutions Vietnam 2 KIT System Solutions Vietnam 3 KIT System Solutions Vietnam 4 KIT System Solutions Vietnam 5 KIT System Solutions Vietnam 6 KIT System Solutions Vietnam 7 KIT System Solutions Vietnam 8 KIT Syst');
  await page.getByRole('combobox', { name: 'Bạn là?' }).click();
  await page.getByRole('option', { name: 'Sinh viên' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('kit.tester@kit-group.net');
  await page.getByRole('textbox', { name: 'Mật khẩu', exact: true }).click();
  await page.getByRole('textbox', { name: 'Mật khẩu', exact: true }).fill('12345678aA@');
  await page.getByRole('textbox', { name: 'Xác nhận mật khẩu' }).click();
  await page.getByRole('textbox', { name: 'Xác nhận mật khẩu' }).fill('12345678aA@');
  await page.getByText('Tôi đồng ý với Điều khoản sử').click();
  await page.getByText('Tôi xác nhận đã đọc và Đồng').click();
  await page.getByRole('button', { name: 'Đăng ký' }).click();
  await expect(page.locator('form')).toContainText('Họ và tên không được vượt quá 255 ký tự');
});