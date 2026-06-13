import { test, expect } from '@playwright/test';    
test('Example Test', async ({ page }) => {
  await page.goto('https://www.example.com');
  await expect(page).toHaveTitle('Example Domain');
});