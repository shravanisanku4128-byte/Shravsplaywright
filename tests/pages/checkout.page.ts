import { Locator, Page, expect } from '@playwright/test';

export class SauceDemoCheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly overviewTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.overviewTitle = page.locator('text=Checkout: Overview');
  }

  async fillDetails(firstName = 'shravs', lastName = 'sanku', postalCode = '500032') {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
    await expect(this.overviewTitle).toBeVisible();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }
}
