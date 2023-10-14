import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login/loginPage.specs';
import { MainPage } from "../../pages/mainPage.specs";
import { BaseTest } from "../baseTest.specs";
import { AdminLoginPage } from "../../pages/admin/login/adminLoginPage.specs";
import { MainAdminPage } from "../../pages/admin/mainAdminPage.specs";
import { SocialTab } from "../../pages/main_page_tabs/socialTab.specs";
import { SignUpPage } from "../../pages/signUpPage/signUpPage.specs";
import DataHelper from '../../utils/dataHelper.specs';
import {MyProfilePage} from "../../pages/profile/myProfilePage.specs";

const pathToUserData = '../testData/users.json' // Adjusted to be relative
const baseTest = new BaseTest();

test.beforeAll(async async => {
    await baseTest.setup()
})

test.describe('Tests for registration', () => {

    test('Verify Sign up for User', async ({ page }) => {
        await page.goto(baseTest.baseURL + 'login');
        await expect(page).toHaveURL(baseTest.baseURL + 'login');

        const loginPage = new LoginPage(page);
        await loginPage.clickOnSignUpButton();

        const signUpPage = new SignUpPage(page);
        const user = await DataHelper.readJSON(pathToUserData);

        // Generate a random Gmail address and update the user object
        const randomGmail = await DataHelper.generateRandomGmail();
        user.user_default.email = randomGmail;
        user.user_default.username = randomGmail;

        // await signUpPage.clickOnUserTab();
        await signUpPage.fillUserForm(user.user_default)
        await signUpPage.clickSignUpButton();

        const mainPage = new MainPage(page);
        await mainPage.moveToProfile()

        const myProfilePage = new MyProfilePage(page);
        await myProfilePage.verifyUserInfo(user.user_default)
        await myProfilePage.clickOnEditProfileButton()

    });

});

test.afterAll(async async => {
    await baseTest.teardown()
})
