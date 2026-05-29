import { test } from '@playwright/test';
import { SauceDemoLoginPage } from './pages/sauceDemoLogin.page';
import { SauceDemoProductsPage } from './pages/sauceDemoProducts.page';
import { SauceDemoCartPage } from './pages/cart.page';
import { SauceDemoCheckoutPage } from './pages/checkout.page';
import { SauceDemoCheckoutCompletePage } from './pages/checkoutComplete.page';

test('This is my first code', async ({ page }) => {
  const loginPage = new SauceDemoLoginPage(page);
  const productsPage = new SauceDemoProductsPage(page);
  const cartPage = new SauceDemoCartPage(page);
  const checkoutPage = new SauceDemoCheckoutPage(page);
  const completePage = new SauceDemoCheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login();

  await productsPage.expectProductsVisible();
  await productsPage.sortBy('lohi');
  await productsPage.addProductToCart('Sauce Labs Onesie');
  await productsPage.openCart();

  await cartPage.verifyCartPage();
  await cartPage.startCheckout();

  await checkoutPage.fillDetails('shravs', 'sanku', '500032');
  await checkoutPage.finishCheckout();

  await completePage.verifyComplete();
  await completePage.goBackHome();
});

