const {test, expect} = require('@playwright/test');

test('keyboard events test', async ({ page }) => {

    await page.goto('https://www.google.com/');

   // await page.locator('textarea[name="q"]').fill('Rudra Narayan Bisoyi');

   await page.locator('textarea[name="q"]').focus();   
   await page.keyboard.type('Rudra Narayan Bisoyi!'); 
   await page.keyboard.press('ArrowLeft');
   await page.keyboard.down('Shift');
   for (let i = 0; i < 6; i++) {
    await page.keyboard.press('ArrowLeft');
   }
   await  page.keyboard.up('Shift');
   await page.keyboard.press('Backspace');

 
   // await page.waitForTimeout(2000);

   /* //Multiple key press
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Control+V');

*/

    //await page.keyboard.press('Enter');
});