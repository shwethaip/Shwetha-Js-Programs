import { test, expect } from '@playwright/test';

test('codegen test', async ({ page }) => {
 
  await page.goto('https://playwright.dev/');
await page.getByRole('link', { name: 'Docs' }).click();
await page.getByRole('link', { name: 'Installation' }).click();
await page.getByRole('link', { name: 'Installation' }).press('ControlOrMeta+f');
await page.getByRole('code').filter({ hasText: /^npx playwright test$/ }).click();
await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
await page.getByRole('link', { name: 'How to write the first test' }).click();
await page.getByRole('link', { name: 'expect(locator).toBeChecked()' }).click();
})