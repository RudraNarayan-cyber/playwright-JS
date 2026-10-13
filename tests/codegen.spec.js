import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');

  await page.getByRole('button', { name: 'Login' }).click();

  // Verify login/navigation completed
  await expect(
    page.getByRole('link', { name: 'Admin' })
  ).toBeVisible();

  await page.getByRole('link', { name: 'Admin' }).click();
});