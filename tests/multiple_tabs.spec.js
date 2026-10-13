const {test, expect} = require('@playwright/test');

test('multiple tabs', async ({ browser }) => {


    const Context = await browser.newContext();
    const page = await Context.newPage();

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const [newPage] = await Promise.all([
        Context.waitForEvent('page'),
        page.locator("(//a[contains(@href,'facebook')])[1]").click()
    ]);

    await newPage.waitForTimeout(3000);

    await newPage.locator("(//input[@name='email'])[2]").fill("mukesh@gmail.com");
     
    await newPage.waitForTimeout(3000);

    await newPage.close();

    await page.locator("#email1").fill("admin@gmail.com");

    await page.waitForTimeout(3000);

})

