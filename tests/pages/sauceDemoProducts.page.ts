import { Locator, Page, expect } from '@playwright/test';

export class SauceDemoProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly sortSelect: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.sortSelect = page.locator('.product_sort_container');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async expectProductsVisible() {
    await expect(this.title).toBeVisible();
    await expect(this.page.locator('text=Products')).toBeVisible({ timeout: 50000 });
  }

  async sortBy(value: string) {
    await this.sortSelect.selectOption(value);
  }

  async addProductToCart(productName: string) {
    await this.page.locator(`.inventory_item:has-text("${productName}") button`).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
