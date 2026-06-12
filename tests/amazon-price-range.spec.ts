import { test, expect } from '@playwright/test';

test('Search Amazon for mobile and print links priced up to ₹50,000', async ({ page }) => {
  await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('input#twotabsearchtextbox')).toBeVisible();

  await page.fill('input#twotabsearchtextbox', 'mobile');
  await page.click('input#nav-search-submit-button');
  //await page.waitForLoadState('networkidle');
await page.getByRole('slider', { name: 'Maximum price' }).fill('122');
//   const lowPrice = page.locator('input#low-price');
//   const highPrice = page.locator('input#high-price');
//   await expect(lowPrice).toBeVisible();
//   await expect(highPrice).toBeVisible();

//   await lowPrice.fill('0');
//   await highPrice.fill('50000');
//   await page.click('input[type="submit"][aria-labelledby*="a-autoid"]');
//   //await page.waitForLoadState('networkidle');

//   const products = page.locator('div[data-component-type="s-search-result"]');
//   await expect(products.first()).toBeVisible();

//   const productCount = await products.count();
//   console.log(`Found ${productCount} results on the page after applying the price filter.`);

//   for (let i = 0; i < productCount; i++) {
//     const product = products.nth(i);
//     const linkHandle = product.locator('h2 a').first();
//     const href = await linkHandle.getAttribute('href');
//     if (!href) continue;

//     const whole = (await product.locator('.a-price-whole').first().textContent()) ?? '';
//     const fraction = (await product.locator('.a-price-fraction').first().textContent()) ?? '';
//     const priceText = `${whole}${fraction}`.replace(/[^0-9]/g, '');
//     const priceValue = priceText ? Number(priceText) : 0;

//     if (priceValue <= 50000 && priceValue > 0) {
//       const url = href.startsWith('http') ? href : `https://www.amazon.in${href}`;
//       console.log(`₹${priceValue}: ${url}`);
//     }
//   }
});
