// import { test, expect } from '@playwright/test';
// test('Amazon search', async ({ page }) => {
// await page.goto("https://www.amazon.in/");
// await expect(page.locator("#twotabsearchtextbox")).toBeVisible();
// await page.fill("#twotabsearchtextbox","soap")
// await page.keyboard.press("ArrowDown")
// await page.keyboard.press("Enter")

// // const [myPage] = await Promise.all([
// //     page.waitForEvent("popup"),
// //     // page.click("//*[@data-cel-widget='search_result_3']//div[@data-cy='title-recipe']/a"),
// //     page.click("(//div[@role='listitem'])[2]"),
// //   ]);
// //   await myPage.waitForLoadState();
// //   await page.close();
// //   (await myPage.click("(//input[@id='add-to-cart-button'])"),
// //     await myPage.waitForTimeout(5000));
// const option = page.locator("#searchDropdownBox option");
// const count = await option.count();
// for (let i=0; i<count; i++) {
// console.log(await option.nth(i).textContent());
// }

// let i=0;
// while (i<count) {   
// console.log(await option.nth(i).textContent());
// i++;
// }

// let j=0;
// do{
//     console.log(await option.nth(j).textContent());
//     j++;
// }
//     while(j<count)


// // await page.fill("#twotabsearchtextbox","soap")
// // await page.click("#nav-search-submit-button")
// // await page.click('#a-autoid-0')
// // await page.selectOption("#searchDropdownBox", "search-alias=aps")
// });

// import { test } from '@playwright/test';
// test("Amazon Test Automation", async ({ page }) => {
//   await page.goto("https://www.amazon.in/");
//   await page.fill("#twotabsearchtextbox", "soap");
//   await page.keyboard.press("ArrowDown");
//   //await page.waitForTimeout(2000);
//   await page.keyboard.press("ArrowDown");
//   //await page.waitForTimeout(2000);
//   await page.keyboard.press("ArrowDown");
//   //await page.waitForTimeout(2000);
//   await page.keyboard.press("ArrowDown");
//   //await page.waitForTimeout(2000);
//   await page.keyboard.press("Enter");
//   await page.waitForLoadState();
//   //await page.waitForTimeout(5000);
//   await page.locator('.a-dropdown-prompt').click();
//   await page.selectOption('#s-result-sort-select', 'Price: High to Low');

//   const [myPage] = await Promise.all([
//     page.waitForEvent("popup"),
//     //page.click("//*[@data-cel-widget='search_result_3']//div[@data-cy='title-recipe']/a"),
//     //page.click("(//div[@role='listitem'])[2]"),
//    await page.locator("[data-cy='title-recipe'] a").first().click()
//   ]);
//   await myPage.waitForLoadState();
//   await page.close();
//   await myPage.click("(//input[@id='add-to-cart-button'])")
//    await myPage.waitForTimeout(5000);
// });
 

import { test,expect } from '@playwright/test';
test("Amazon Test Automation", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await expect(page.locator("#twotabsearchtextbox")).toBeVisible();
  await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("soap");
  await page.getByRole("button", { name: "Go" }).click();
  await page.waitForTimeout(5000);
});












