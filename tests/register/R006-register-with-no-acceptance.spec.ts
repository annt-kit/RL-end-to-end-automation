import { test, expect } from '@playwright/test';

test('Register without accepting terms', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/sign-up');
  await page.getByRole('textbox', { name: 'Họ và tên' }).click();
  await page.getByRole('textbox', { name: 'Họ và tên' }).fill('KIT Tester');
  await page.getByRole('combobox', { name: 'Bạn là?' }).click();
  await page.getByRole('option', { name: 'Sinh viên' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('kit.tester@kit-group.net');
  await page.getByRole('textbox', { name: 'Mật khẩu', exact: true }).click();
  await page.getByRole('textbox', { name: 'Mật khẩu', exact: true }).fill('12345678aA@');
  await page.getByRole('textbox', { name: 'Xác nhận mật khẩu' }).click();
  await page.getByRole('textbox', { name: 'Xác nhận mật khẩu' }).fill('12345678aA@');
  await page.getByRole('button', { name: 'Đăng ký' }).click();
  await expect(page.locator('form')).toContainText('Bạn phải đồng ý với Điều khoản sử dụng của Reflective Learnings.');
  await expect(page.locator('form')).toContainText('Bạn phải xác nhận đã đọc và đồng ý với việc xử lý dữ liệu cá nhân.');
});