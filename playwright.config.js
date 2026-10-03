import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './browser-tests',
  workers: 1,
  reporter: 'list',
  use: { baseURL: process.env.MEAN_BASE_URL || 'http://127.0.0.1:4174', viewport: { width: 1366, height: 768 }, channel: 'chrome', launchOptions: { args: ['--enable-unsafe-swiftshader'] }, screenshot: 'only-on-failure' },
});
