import { test, expect } from '@playwright/test';

test('codegen test to buy mot g57 ', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('moto g57');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'G57 Power (Corsair, 8GB RAM,' }).click();
  const page1 = await page1Promise;
  await expect(page1.locator('#title')).toContainText('Motorola G57 Power');
  await page1.getByText('21,299', { exact: true }).click();
  await page1.getByText('21,299', { exact: true }).dblclick();
  await page1.getByRole('button', { name: 'Add to cart' }).click();
  await page1.getByRole('button', { name: 'Proceed to Buy (1 item) Buy' }).click();

})