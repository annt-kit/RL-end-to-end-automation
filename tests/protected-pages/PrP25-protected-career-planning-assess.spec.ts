import { test, expect } from '@playwright/test';

test('Protected Career Planning Assess Result page', async ({ page }) => {
  await page.goto('https://app.reflectivelearnings.com/vi/home/career-planning/assess');

  await expect(page).toHaveURL('https://app.reflectivelearnings.com/vi/login');
});