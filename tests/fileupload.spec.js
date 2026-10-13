const {test, expect} = require('@playwright/test');

test('file upload test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');

     await page.locator("#file-upload").setInputFiles("./upload/kandhunidebi.jpeg"); 
     await page.locator("#file-submit").click();
     await expect(page.locator('h3')).toHaveText('File Uploaded!');
     
});