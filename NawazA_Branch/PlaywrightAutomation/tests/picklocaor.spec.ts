import {test, expect} from '@playwright/test';

test('test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('nawaz');
    await page.locator('[data-test="password"]').fill('nawaz');
    await page.locator('[data-test="login-button"]').click();

})