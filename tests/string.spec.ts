let msg: string = "I love playwright!";
console.log(msg.length);
console.log(msg.indexOf("playwright"));
console.log(msg.replace("playwright", "AI"));
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(msg.substring(2,6));
let num: string = "123456789";
console.log(num.substring(3,7));
console.log(msg.charAt(3));
console.log(msg[5]);
//let arr : string[]=["I","love","playwright!"];
//let res = msg.split(" ");// deeni output anedi Array
console.log(msg.split(" ")); // Output: ["i", "love", "PlayWright"]

import { test, expect } from '@playwright/test';
test('Amazon search', async ({ page }) => {
await page.goto("https://www.amazon.in/");
await expect(page.locator("#twotabsearchtextbox")).toBeVisible();
await page.fill("#twotabsearchtextbox","cleaning robot")
await page.click("#nav-search-submit-button")
const arr: string = await page.locator('h2.a-size-base.a-spacing-small.a-spacing-top-small.a-text-normal').innerText();
console.log(arr);
console.log(arr[0]);
console.log(arr.indexOf("10000"));
let shravs: string[] = arr.split("  ")
console.log(shravs); 
console.log(arr.charAt(9));
// const shrav: string[] = ["ramana", "sai", "hari"];
// console.log(shrav);

}); 
