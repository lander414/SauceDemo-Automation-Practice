import { test, expect } from '@playwright/test';

test('login page title', async ({ page }) => {
  await page.goto('/');

  // Expect the Saucedemo login page title.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('login form is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByPlaceholder('Username')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
