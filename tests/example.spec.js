// @ts-check

import {test,expect  } from "@playwright/test";

test("navigate",async ({page})=>{
 await page.goto("https://www.saucedemo.com/");
 await  expect(page).toHaveTitle("Swag Labs");
 await page.waitForTimeout(3000)
})

test("test The URL",async ({page})=>{
  await page.goto("https://www.saucedemo.com/");
  await  expect(page).toHaveURL(/.*demo/);
})

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  const buttons =await page.$$('.btn')
  for(const button of buttons){
    await button.click()
  }

});