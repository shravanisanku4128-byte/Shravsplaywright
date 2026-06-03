import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rightandbright.vercel.app/automation-practice');
  await page.getByRole('textbox', { name: 'Enter your text here' }).click();
  await page.getByRole('button', { name: 'Primary' }).click();
  await page.getByRole('button', { name: 'Danger' }).click();
  await page.getByRole('combobox').selectOption('option1');
  await page.locator('input[type="date"]').fill('2026-06-10');
  await page.getByRole('radio', { name: 'Option B' }).check();
  await page.getByRole('checkbox', { name: 'Checkbox 2' }).check();
  await page.getByRole('checkbox', { name: 'Checkbox 3' }).check();
  await page.getByRole('textbox', { name: 'Type something and see key' }).click();
  await page.getByRole('textbox', { name: 'Type something and see key' }).fill('s');
  await page.getByRole('link', { name: 'Start Practicing' }).click();
});

