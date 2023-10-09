import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login/loginPage.specs';
import {MainPage} from "../../pages/mainPage.specs";
import {BaseTest} from "../baseTest.specs";
import {AdminLoginPage} from "../../pages/admin/login/adminLoginPage.specs";
import {MainAdminPage} from "../../pages/admin/mainAdminPage.specs";
import {SocialTab} from "../../pages/main_page_tabs/socialTab.specs";
const baseTest = new BaseTest();

test.beforeAll(async async => {
    await baseTest.setup()
})


test.describe('Tests for not logged user and verify Social, Explore and Chat tabs', () => {

    test('Verify Social tab + popular is available for not logged user', async ({ page }) => {
        await page.goto(baseTest.baseURL);
        await expect(page).toHaveURL(baseTest.baseURL);

        const mainPage = new MainPage(page);
        await mainPage.verifyThatIsMainPage(page)
        await mainPage.clickOnSocialTab();

        const socialTab = new SocialTab(page);
        await socialTab.verifyThatIsSocialTab(page,baseTest.baseURL + 'social');

    });

    test('Verify Social tab + Latest is not available for not logged user ', async ({ page }) => {
        await page.goto(baseTest.baseURL);
        await expect(page).toHaveURL(baseTest.baseURL);

        const mainPage = new MainPage(page);
        await mainPage.verifyThatIsMainPage(page)
        await mainPage.clickOnSocialTab();

        const socialTab = new SocialTab(page);
        await socialTab.clickOnLatest();

        const loginPage = new LoginPage(page);
        await loginPage.verifyThatIsLoginPage();

    });

    test('Verify Explore tab is not available for not logged user', async ({ page }) => {
        await page.goto(baseTest.baseURL);
        await expect(page).toHaveURL(baseTest.baseURL);

        const mainPage = new MainPage(page);
        await mainPage.verifyThatIsMainPage(page)
        await mainPage.clickOnExploreTab();

        const loginPage = new LoginPage(page);
        await loginPage.verifyThatIsLoginPage();

    });

    test('Verify Chat tab is not available for not logged user', async ({ page }) => {
        await page.goto(baseTest.baseURL);
        await expect(page).toHaveURL(baseTest.baseURL);

        const mainPage = new MainPage(page);
        await mainPage.verifyThatIsMainPage(page)
        await mainPage.clickOnChatTab();

        const loginPage = new LoginPage(page);
        await loginPage.verifyThatIsLoginPage();

    });


});




test.afterAll(async async => {
    await baseTest.teardown()
})


