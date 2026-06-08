import { test, expect } from '@playwright/test';

test('Protected EMBLEM Contribution page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/emblem/contribution-learnings');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});