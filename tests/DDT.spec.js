const {test, expect} = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require("../testdata.json")));

test.describe('Data Driven Testing', () => {

    for(const data of testData) {

     test.describe(`Login with users ${data.username}`, () => {

        test('Login to Application', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.locator("//input[@id='email1']").fill(data.username);


    await page.locator("//input[@id='password1']").fill(data.password);
    
    

    

});


     })
     

}
     
});


