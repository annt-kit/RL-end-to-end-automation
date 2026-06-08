import { test, expect } from '@playwright/test';

test('Protected EMBLEM Assessment page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/career-survey');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/sign-up');
});