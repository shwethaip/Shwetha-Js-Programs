
// import { expect, test} from '@playwright/test';

// test('Browser context playwright test', async function ({browser}) {
// const context = await browser.newContext();
// const page = await context.newPage();
// await page.goto("https://playwright.dev/");
// console.log(await page.title());
// await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
// });


// test('Page fixture playwright test', async  ({page}) =>{
// await page.goto("https://google.com");
// console.log(await page.title());
//  await expect(page).toHaveTitle("Google");

// }
// );





import { test, expect } from "@playwright/test"

test('sample test with arrow function', { tag: '@smoke' }, async ({ page }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');
    console.log(await page.title());
});

test('sample test with normal fumction', async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.amazon.in");
    //await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    
    const title = await page.title();
     
    console.log('Page title:', title);
    //await expect(page).toHaveTitle(/Amazon\.in/);
    await context.close();
});