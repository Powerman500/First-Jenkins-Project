import { test } from '@playwright/test';

test('Youtube Search', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  await page.waitForTimeout(3000);

  let searchBox = page.locator("//input[@id='search']");

  await searchBox.click();

  await searchBox.fill("Cydeo");

  //await page.waitForTimeout(3000);

  await searchBox.press("Enter");

  //await page.waitForTimeout(3000);

  let videoTitle = page.locator("//a[@id='video-title' and @title='Does age discrimination exist in Tech?']");

  await videoTitle.click();

  //await page.waitForTimeout(3000);



});