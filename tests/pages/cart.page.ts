import { Locator, Page, expect } from '@playwright/test';

export class SauceDemoCartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('text=Your Cart');
    this.checkoutButton = page.locator('#checkout');
  }

  async verifyCartPage() {
    await expect(this.title).toBeVisible();
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }
}
