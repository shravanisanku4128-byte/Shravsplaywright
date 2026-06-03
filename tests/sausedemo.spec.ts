import { test, expect } from '@playwright/test';
test('This is my first code', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.fill('#user-name','standard_user')
await page.fill('#password','secret_sauce')
await page.click('#login-button')
await expect(page.locator(".title")).toBeVisible({timeout:50000});
await page.selectOption('.product_sort_container', 'lohi')
await page.waitForTimeout(5000)
await page.click("//div[@class='inventory_list']/div[3]//button")
await page.click(".shopping_cart_link")
await expect(page.locator("//span[text()='Your Cart']")).toBeVisible();
await page.click('#checkout')
await page.fill('#first-name','shravs')
await page.fill('#last-name','sanku')
await page.fill('#postal-code','500032')
await page.click('#continue')
await expect(page.locator("//span[text()='Checkout: Overview']")).toBeVisible();
await page.click('#finish')
await expect(page.locator("//span[text()='Checkout: Complete!']")).toBeVisible();
// await page.click("//button[@id='back-to-products']")
// await page.click('#back-to-products')
await page.click("//button[text()='Back Home']")
});