import { test, expect } from '@playwright/test';

test('Login successfully', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('an.nt@kit-group.net');
  await page.getByRole('textbox', { name: 'Mật khẩu' }).click();
  await page.getByRole('textbox', { name: 'Mật khẩu' }).fill('12345678aA#');
  await page.getByRole('button', { name: 'Đăng nhập', exact: true }).click();

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/home');
});