import { test, expect } from '@playwright/test';
test('Test Automation Practice', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.fill("#name", "Shravs");
await page.fill("#email", "Shrav.sanku@gmail.com");
await page.fill("#phone", "1234567890");
await page.fill("#textarea", "hyderabad");
await page.fill("#Wikipedia1_wikipedia-search-input", "India");
await page.click(".wikipedia-search-button");
await page.selectOption("#country", "canada");
const femaleRdo = page.locator('#female');
await femaleRdo.click();
await expect (femaleRdo).toBeChecked();
  //await expect(maleRadio).toBeChecked();
   const sundayCheckbox = page.locator('#sunday');
   await sundayCheckbox.check();
   // Validate it's checked
   await expect(sundayCheckbox).toBeChecked();
   // Uncheck if needed
   await sundayCheckbox.uncheck();
   // Validate it's unchecked
   await expect(sundayCheckbox).not.toBeChecked();
   await page.locator("//button[contains(text(),'Point Me')]").hover();
 await page.locator("//button[contains(text(),'Copy Text')]").dblclick();

    const filePath = ['./media/vikram sai photo.jpg','./media/muralikrishna photo.jpg'];
 
	// to upload we use setInputFiles method
	await page.locator('#multipleFilesInput').setInputFiles(filePath);
	await page.locator('//button[contains(text(),"Upload Multiple Files")]').click();
	//await page.waitForTimeout(5000);
	//await expect(page.locator('#singleFileStatus')).toHaveText('Single file selected: vikram sai photo.jpg, Size: 45356 bytes, Type: image/jpeg');
const sourcelocator = page.locator("//div[@id='draggable']")
    const destinationlocator = page.locator("//div[@id='droppable']")
    await sourcelocator.dragTo(destinationlocator)
});