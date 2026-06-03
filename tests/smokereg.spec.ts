import { test } from '@playwright/test';
 
test.describe('Smoke Test Suite @allam', () => {
  test('allam bellam kallem', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.waitForTimeout(5000);

});
 
test('charu pappu User Test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
});
 
test('Delete User Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
});

});