import { test } from '@playwright/test';
import path from 'path';
test('Dowload File1', async ({ page }) => {
	await page.goto('https://demo.automationtesting.in/FileDownload.html');
	const [download] = await Promise.all([
    	page.waitForEvent('download'),
    	page.click("//a[@class='btn btn-primary']"), // trigger download
	]);    
	const downloadPath = path.join(process.cwd(), './media', download.suggestedFilename());    
	await download.saveAs(downloadPath);
	console.log('File saved to:', downloadPath);
 });
