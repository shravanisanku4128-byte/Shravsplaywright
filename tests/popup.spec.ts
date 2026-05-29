import { test } from '@playwright/test';    
test('dialog Accept', async ({ page }) => {
 
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    // Set up dialog listener BEFORE clicking
    page.once('dialog', async dialog => {
        
        let alertText = dialog.message();
        console.log('Alert text captured:', alertText);        
        expect(alertText).toBe('I am a JS Alert');
        await console.log('Type:', dialog.type);        
        
        await dialog.accept();// Accept the dialog      
        // await dialog.dismiss(); // Dismiss the dialog (if needed)
    });
    // Now click the button
    await page.click('button[onclick="jsAlert()"]');
});