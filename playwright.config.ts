import { defineConfig } from '@playwright/test';

declare const process: { env: { BASE_URL?: string } };

export default defineConfig({
  testDir: './e2e',
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL || 'https://www.saucedemo.com/',
    trace: 'on-first-retry',
  },
});