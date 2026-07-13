import 'dotenv/config';
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

test('login with valid credentials', async ({ page }) => {
  const username = process.env.SAUCEDEMO_USERNAME ?? '';
  const password = process.env.SAUCEDEMO_PASSWORD ?? '';

  await page.goto('/');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Swag Labs')).toBeVisible();
});

test('Login with invalid credentials(Recorded)', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill('invalid_user');   
  await page.getByPlaceholder('Password').fill('invalid_pass');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});