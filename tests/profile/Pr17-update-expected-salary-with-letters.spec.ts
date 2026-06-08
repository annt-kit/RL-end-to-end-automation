import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('Update profile with expected salary containing letters', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/settings');

  
  await page.getByRole('textbox', { name: 'Lương mong muốn' }).click();
  await page.getByRole('textbox', { name: 'Lương mong muốn' }).fill('f');
  
  await expect(page.getByRole('textbox', { name: 'Lương mong muốn' })).toHaveValue('');
});