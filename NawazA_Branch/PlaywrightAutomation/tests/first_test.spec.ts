import { test } from '@playwright/test';

test("Enter Personal dummy details", async ({ page }) => { 

    await page.goto("https://sqatools.in/dummy-booking-website/");

    await page.locator("#first_name").nth(0).fill("Nawaz");
    await page.locator("#last_name").nth(1).fill("A");
    await page.locator("#male").check();

})


test ("Enter the destinayion city", async ({ page }) => {

    await page.goto("https://sqatools.in/dummy-booking-website/");

    await page.locator('#fromcity').fill("Indore");
    await page.locator('#fromcity').fill("Mumbai");

})