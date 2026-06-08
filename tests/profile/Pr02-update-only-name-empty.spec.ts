import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('Update profile with only name field empty', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/settings');
  await page.getByRole('textbox', { name: 'Họ và tên' }).click();
  await page.getByRole('textbox', { name: 'Họ và tên' }).fill('');

  await page.getByText('Nam').click();

  await page.getByRole('textbox', { name: 'Số điện thoại' }).click();
  await page.getByRole('textbox', { name: 'Số điện thoại' }).fill('0902393503');

  await page.getByRole('textbox', { name: 'LinkedIn URL' }).click();
  await page.getByRole('textbox', { name: 'LinkedIn URL' }).fill('https://linkedin.com');

  await page.getByRole('textbox', { name: 'Chức vụ' }).click();
  await page.getByRole('textbox', { name: 'Chức vụ' }).fill('Software Tester');

  await page.getByRole('combobox', { name: 'Số năm kinh nghiệm' }).click();
  await page.getByRole('option', { name: 'Dưới 2 năm' }).click();
  
  await page.getByRole('textbox', { name: 'Vị trí mong muốn' }).click();
  await page.getByRole('textbox', { name: 'Vị trí mong muốn' }).fill('Senior Tester');

  await page.getByRole('textbox', { name: 'Lương hiện tại' }).click();
  await page.getByRole('textbox', { name: 'Lương hiện tại' }).fill('10000000');

  await page.getByRole('textbox', { name: 'Lương mong muốn' }).click();
  await page.getByRole('textbox', { name: 'Lương mong muốn' }).fill('30000000');

  await page.getByRole('button', { name: 'Lưu các thay đổi' }).click();

  await expect(page.locator('form')).toContainText('Họ và tên là bắt buộc');
});