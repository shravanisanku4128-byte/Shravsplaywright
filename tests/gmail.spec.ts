import {test} from '@playwright/test';
test ('gmail automation', async({page}) => {
await page.goto("https://www.gmail.com/");
await page.fill("#identifierId", 'shravani.sanku@gmail.com')
await page.click("#identifierNext")
await page.fill("#password", "Shravs@123")
await page.click("#passwordNext")   







}); 
