import { Locator, Page, expect } from '@playwright/test';

export class SauceDemoCheckoutCompletePage {
  readonly page: Page;
  readonly completeTitle: Locator;
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completeTitle = page.locator('text=Checkout: Complete!');
    this.backHomeButton = page.locator('text=Back Home');
  }

  async verifyComplete() {
    await expect(this.completeTitle).toBeVisible();
  }

  async goBackHome() {
    await this.backHomeButton.click();
  }
}
