const {test, expect} = require('@playwright/test');

test('Handle Alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    //Capture the alert and verify the alert message
    page.on('dialog', async (d) => {
        expect(d.type()).toContain('alert');
        expect(d.message()).toContain('I am a JS Alert');

        await d.accept();

    })

    await page.locator("//button[text()='Click for JS Alert']").click();

})


test('Handle confirm', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    //Capture the alert and verify the alert message
    page.on('dialog', async (d) => {
        expect(d.type()).toContain('confirm');
        expect(d.message()).toContain('I am a JS Confirm');

       // await d.accept();
        await d.dismiss();

    })

    await page.locator("//button[text()='Click for JS Confirm']").click();

})


test('Handle prompt', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    //Capture the alert and verify the alert message
    page.on('dialog', async (d) => {
        expect(d.type()).toContain('prompt');
        expect(d.message()).toContain('I am a JS prompt');

       await d.accept("Rudra");
        //await d.dismiss()

    })

    await page.locator("//button[text()='Click for JS Prompt']").click();

    await page.waitForTimeout(5000);
})



//note: In playwright we can handle the alert, confirm and prompt using the dialog event. We can use the accept() method to accept the alert and dismiss() method to dismiss the alert. We can also use the message() method to get the message of the alert. We can also use the type() method to get the type of the alert.
//note:please call "page.on" before clicking.(not only clicking which can cause dialog)