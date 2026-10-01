import { test, expect } from '@playwright/test';
import testdata from '../data.json' with {"type":"json"}
import {LoginPage} from '../pages/login_page.js';

test.beforeEach(async({page})=>{
  await page.goto('https://www.saucedemo.com/');
})

// create function for all comman steps
// async function login (page,username,password){
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill(username);
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill(password);
//   await page.locator('[data-test="login-button"]').click();
// }

// Validate message 
// async function validateErrorMsg(page,expectedErrorMsg){
//   let errorMsg = await page.locator('[data-test="error"]').textContent();
//   expect(errorMsg).toBe(expectedErrorMsg)
// }

for (let data of testdata){
  test(data.testname, async({page})=>{
    let lgObject = new LoginPage(page);
    await lgObject.login(data.username, data.password);
    await lgObject.validateErrorMsg(data.errorMsg)
});
}
// Using for loop
// for (let i=1; i<100; i++){

// test(`Login Test ${i}`, async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="login-credentials"]').click();
//   await page.locator('[data-test="login-credentials"]').click();
//   await page.locator('[data-test="login-credentials"]').click();
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
// });
// }
//====================================================================
// Empty User name and password
//test("Veryfy user able to check error message for empty credentials", async ({ page }) => {
  //await page.goto('https://www.saucedemo.com/');
  // await page.locator('[data-test="username"]').click();
  // await page.locator('[data-test="username"]').fill('');
  // await page.locator('[data-test="password"]').click();
  // await page.locator('[data-test="password"]').fill('');
  // await page.locator('[data-test="login-button"]').click();
  //await login(page,"","");
  //await validateErrorMsg(page,"Epic sadface: Username is required")
  //let errorMsg = await page.locator('[data-test="error"]').textContent();
  //console.log(errorMsg);
  //validate message--- test case pass
  //expect(errorMsg).toBe("Epic sadface: Username is required")
  //validate message--- test case fail
  //expect(errorMsg).toBe("Epic sadface: Username is required1")
//});
// Cmd use :- npx playwright test file name(exzmple.spec.js)
//===================================================================
//Empty User name 
//test("Veryfy user able to check error message for empty username", async ({ page }) => {
  //await page.goto('https://www.saucedemo.com/');
  // await page.locator('[data-test="username"]').click();
  // await page.locator('[data-test="username"]').fill('');
  // await page.locator('[data-test="password"]').click();
  // await page.locator('[data-test="password"]').fill('abcd');
  // await page.locator('[data-test="login-button"]').click();
  //await login(page,"","abcd");
  //await validateErrorMsg(page,"Epic sadface: Username is required")
  //let errorMsg = await page.locator('[data-test="error"]').textContent();
  //console.log(errorMsg);
  //validate message--- test case pass
  //expect(errorMsg).toBe("Epic sadface: Username is required")
  //validate message--- test case fail
  //expect(errorMsg).toBe("Epic sadface: Username is required1")
//});
//==================================================================
// Empty password
//test("Veryfy user able to check error message for empty password", async ({ page }) => {
  //await page.goto('https://www.saucedemo.com/');
  // await page.locator('[data-test="username"]').click();
  // await page.locator('[data-test="username"]').fill('standard_user');
  // await page.locator('[data-test="password"]').click();
  // await page.locator('[data-test="password"]').fill('');
  // await page.locator('[data-test="login-button"]').click();
  //await login(page,"standard_user","");
  //await validateErrorMsg(page,"Epic sadface: Password is required")
  //let errorMsg = await page.locator('[data-test="error"]').textContent();
  //console.log(errorMsg);
  //validate message--- test case pass
  //expect(errorMsg).toBe("Epic sadface: Password is required")
  //validate message--- test case fail
  //expect(errorMsg).toBe("Epic sadface: Password is required1")
//});
//===============================================================
//Wrong Credentials
//test("Veryfy user able to check error message for wrong credentials", async ({ page }) => {
  //await page.goto('https://www.saucedemo.com/');
  // await page.locator('[data-test="username"]').click();
  // await page.locator('[data-test="username"]').fill('abc');
  // await page.locator('[data-test="password"]').click();
  // await page.locator('[data-test="password"]').fill('xyz');
  // await page.locator('[data-test="login-button"]').click();
  //await login(page,"abc","xyz");
  //await validateErrorMsg(page,"Epic sadface: Username and password do not match any user in this service")
  //let errorMsg = await page.locator('[data-test="error"]').textContent();
  //console.log(errorMsg);
  //validate message--- test case pass
  //expect(errorMsg).toBe("Epic sadface: Username and password do not match any user in this service")
  //validate message--- test case fail
  //expect(errorMsg).toBe("Epic sadface: Username and password do not match any user in this service1")
//});