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

    test('Verify facebook link is available for not logged user', async ({ page }) => {
        await page.goto(baseTest.baseURL);
        await expect(page).toHaveURL(baseTest.baseURL);

        const mainPage = new MainPage(page);
        await mainPage.verifyThatIsMainPage(page)
        await mainPage.clickOnFacebookFooterLink();

        await expect(page).toHaveURL("https://www.facebook.com/Transfans/")

    });

    test('Verify instagram link is available for not logged user', async ({ page }) => {
        await page.goto(baseTest.baseURL);
        await expect(page).toHaveURL(baseTest.baseURL);

        const mainPage = new MainPage(page);
        await mainPage.verifyThatIsMainPage(page)
        await mainPage.clickOnInstagramFooterLink();

        await expect(page).toHaveURL("https://www.instagram.com/transfans/")

    });

    test('Verify tiktok link is available for not logged user', async ({ page }) => {
        await page.goto(baseTest.baseURL);
        await expect(page).toHaveURL(baseTest.baseURL);

        const mainPage = new MainPage(page);
        await mainPage.verifyThatIsMainPage(page)
        await mainPage.clickOnTiktokFooterLink();


        await expect(page).not.toHaveURL("https://www.tiktok.com/404?fromUrl=/transfans")
        //TODO rewrite this with correct URL because right now it is 404
        // await expect(page).toHaveURL("here should be correct URL")

    });

    test('Verify youtube link is available for not logged user', async ({ page }) => {
        await page.goto(baseTest.baseURL);
        await expect(page).toHaveURL(baseTest.baseURL);

        const mainPage = new MainPage(page);
        await mainPage.verifyThatIsMainPage(page)
        await mainPage.clickOnYoutubeFooterLink();


        await expect(page.locator('css=#error-page-hh-illustration')).not.toBeVisible();
        //TODO rewrite this with correct URL because right now it is 404
        // await expect(page).toHaveURL("here should be correct URL")

    });


});




test.afterAll(async async => {
    await baseTest.teardown()
})


