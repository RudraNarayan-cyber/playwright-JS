const { test, expect } = require('@playwright/test');

test('keyboard events test', async ({ page }) => {
    await page.goto('https://www.google.com');

    const searchBox = page.locator('textarea[name="q"]');

    await searchBox.fill('Rudra Narayan Bisoyi!');

    await page.waitForSelector("//li[@role='presentation']");

    await searchBox.focus();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
});
