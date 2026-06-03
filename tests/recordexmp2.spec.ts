import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('shravs');
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.getByRole('checkbox', { name: 'Saturday' }).check();
  await page.getByLabel('Country:').selectOption('france');
  await page.getByLabel('Sorted List:').selectOption('cheetah');
  await page.locator('#datepicker').click();
  await page.locator('#ui-datepicker-div').getByRole('link', { name: '3', exact: true }).click();
  await page.locator('#txtDate').click();
  await page.getByRole('link', { name: '10' }).click();
  await page.getByRole('button', { name: 'Copy Text' }).click();
});