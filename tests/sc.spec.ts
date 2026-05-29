import {test } from '@playwright/test';
 
test('Screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/')
 
    await page.screenshot({
        path: './media/playwright.png' //Project Folder./Screenshots/playwright.png
     });
 
    const logo = await page.locator("//a[@class='navbar__brand']");
    await logo.screenshot({
        path: './media/playwrightlogo.png'
    });
});


 