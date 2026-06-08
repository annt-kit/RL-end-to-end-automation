import { test, expect } from '@playwright/test';

test('Register with empty data', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/sign-up');
  await page.getByRole('checkbox', { name: 'Tôi đồng ý với Điều khoản sử' }).click();
  await page.getByRole('checkbox', { name: 'Tôi xác nhận đã đọc và Đồng' }).click();
  await page.getByRole('button', { name: 'Đăng ký' }).click();
  await expect(page.locator('form')).toContainText('Vui lòng nhập họ và tên của bạn');
  await expect(page.locator('form')).toContainText('Vui lòng chọn đối tượng phù hợp');
  await expect(page.locator('form')).toContainText('Vui lòng nhập email');
  await expect(page.locator('form')).toContainText('Mật khẩu cần bao gồm độ dài trên 8 ký tự, chữ hoa, chữ thường, số và kí tự đặc biệt');
});