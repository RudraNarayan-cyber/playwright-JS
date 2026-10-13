const {test, expect} = require('@playwright/test');

test('keyboard events test-using keyboard', async ({ page }) => {
    await page.goto('https://www.google.com'); 

    await page.locator('textarea[name="q"]').fill('Rudra Narayan Bisoyi!');
    await page.waitForSelector("//li[@role='presentation']");

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');



});


test.only('keyboard events test-using loop', async ({ page }) => {
    await page.goto('https://www.google.com'); 

    await page.locator('textarea[name="q"]').fill('mukesh otwani');
    await page.waitForSelector("//li[@role='presentation']");

   const element = await page.$$("//li[@role='presentation']");
 
   for (let i = 0; i < element.length; i++) {

       const text = await element[i].textContent();
       if (text.includes('mukesh otwani github')) {
            await element[i].click();
            break;
       }


  }

})