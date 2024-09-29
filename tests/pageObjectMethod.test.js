import { test } from '@playwright/test';

test("Getting the title of the page", async ({ page }) => {
  // goto https://practice.cydeo.com/
  await page.goto('https://practice.cydeo.com/');
  // Wait for 3 seconds
  //await page.waitForTimeout(3000);
  // Get the title of the page
  let title = await page.title();
  console.log(title);

  // wait for 3 seconds
 // await page.waitForTimeout(3000);


});

test("Getting the current URL of the page", async ({ page }) => {
  await page.goto('https://practice.cydeo.com/');

  let currentUrl = page.url();

  console.log(currentUrl);

  // wait for 3 seconds
  //await page.waitForTimeout(3000);

});

test("Set the window size", async ({ page }) => {
  await page.goto('https://practice.cydeo.com/');

  await page.setViewportSize({ width: 1280, height: 800 });

  //wait for 3 seconds
  //await page.waitForTimeout(3000);


});