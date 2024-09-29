import { test } from '@playwright/test';

test.describe('Test Group', () => {

    //create beforeEach for tests
   test.beforeEach(async({page}) => {
  await page.goto('https://practice.cydeo.com/'); // navigate to url
    
   });

    //create afterEach for tests
    test.afterEach(async ({page}) => {
        //await page.waitForTimeout(3000);
    });

  test('Getting the title of the page', async ({ page }) => {
    console.log(await page.title());
  });

  test('Getting the current URL of the page', async ({ page }) => {
    // Your test code goes here
    console.log(page.url());
  });

});