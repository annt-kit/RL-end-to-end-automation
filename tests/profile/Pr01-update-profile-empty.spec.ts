import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('Update profile with empty data', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/settings');
  await page.getByRole('textbox', { name: 'Họ và tên' }).click();
  await page.getByRole('textbox', { name: 'Họ và tên' }).fill('');
  await page.getByRole('textbox', { name: 'Địa chỉ', exact: true }).click();
  await page.getByRole('textbox', { name: 'Địa chỉ', exact: true }).fill('');
  await page.getByRole('checkbox', { name: 'Tôi đang tích cực tìm việc' }).click();
  await page.getByRole('button', { name: 'Lưu các thay đổi' }).click();
  await expect(page.locator('form')).toContainText('Họ và tên là bắt buộc');
});