import {test } from '@playwright/test';
test('Multiple Browsers-Contexts-Pages', async ({ browser }) => {
const context1 = await browser.newContext();
const page1 = await context1.newPage();
const page2 = await context1.newPage();
await page1.goto('https://amazon.com');
await page2.goto('https://flipkart.com');
await browser.close();
});


