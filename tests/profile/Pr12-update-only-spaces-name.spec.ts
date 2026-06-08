import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('Update profile with only spaces in name', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/settings');
  await page.getByRole('textbox', { name: 'Họ và tên' }).click();
  await page.getByRole('textbox', { name: 'Họ và tên' }).fill('   ');

  await page.getByText('Giới tính').click();
  await expect(page.getByRole('textbox', { name: 'Họ và tên' })).toHaveValue('');

  await page.getByRole('button', { name: 'Lưu các thay đổi' }).click();
  
  await expect(page.locator('form')).toContainText('Họ và tên là bắt buộc');
});