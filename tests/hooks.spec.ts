import { test, expect } from '@playwright/test';
 
test.beforeAll(async () => {
  console.log('Load the DB/ Excel');
});
 
test.beforeEach(async ({ page }) => {
  console.log('Before Each');
  await page.goto('https://www.saucedemo.com');
});
 
test.afterEach(async () => {
  console.log('Click on Search Button and Print all values  ');
  console.log('Close the Browser');
});
 
test.afterAll(async () => {
  console.log('Close the DB/ Excel');
});
 
test('Login Test', async ({ page }) => {
  await expect(page).toHaveTitle(/Swag Labs/);
});
 
test('Products Test', async ({ page }) => {
  await expect(page).toHaveURL(/saucedemo/);
});