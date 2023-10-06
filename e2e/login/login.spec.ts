import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login/loginPage.specs';
import {MainPage} from "../../pages/mainPage.specs";
import {BaseTest} from "../baseTest.specs";
import {AdminLoginPage} from "../../pages/admin/login/adminLoginPage.specs";
import {MainAdminPage} from "../../pages/admin/mainAdminPage.specs";
const baseTest = new BaseTest();

test.beforeAll(async async => {
  await baseTest.setup()
})


test.describe('Tests for login', () => {
  test('login as user', async ({ page }) => {
    await page.goto(baseTest.baseURL);
    await expect(page).toHaveURL(baseTest.baseURL);

    const loginPage = new LoginPage(page);
    await loginPage.logIn(baseTest.userName, baseTest.userPassword)

    const mainPage = new MainPage(page);
    await mainPage.verifyThatIsMainPage(page)

  });

  // test('login as admin', async ({ page }) => {
  //   await page.goto(baseTest.adminURL + 'login');
  //   // await expect(page).toHaveURL(/`${baseTest.adminURL}`/);
  //
  //   const loginPage = new AdminLoginPage(page);
  //   await loginPage.logIn(baseTest.adminName, baseTest.adminPassword)
  //
  //   const mainPage = new MainAdminPage();
  //   await mainPage.verifyThatIsMainAdminPage(baseTest.adminName, page)
  //
  // });
  //
  // test('login as creator', async ({ page }) => {
  //   await page.goto(baseTest.baseURL);
  //   await expect(page).toHaveURL(baseTest.baseURL);
  //
  //   const loginPage = new LoginPage(page);
  //   await loginPage.logIn(baseTest.creatorName, baseTest.creatorPassword)
  //
  //   const mainPage = new MainPage(page);
  //   await mainPage.verifyThatIsMainPage(page)
  //
  // });
});




test.afterAll(async async => {
  await baseTest.teardown()
})


