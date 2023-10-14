import type { Page, Locator } from '@playwright/test';
import {expect} from "@playwright/test";

export class LoginPage {
    private readonly IDOfThePage: Locator;
    private readonly loginField: Locator;
    private readonly passwordField: Locator;
    private readonly submitButton: Locator;
    private readonly signUpButton: Locator;

    constructor(readonly page : Page) {
        this.IDOfThePage = this.page.locator('css=#login_cont');
        this.loginField = this.page.locator('css=#dv_email_usr');
        this.passwordField = this.page.locator('xpath=//input[@type="password"]');
        this.submitButton = this.page.locator('css=#logIn1');
        this.signUpButton = this.page.locator('xpath=.//span[contains(text(), "Sign Up Now")]')
    }

    async logIn(loginName, passowrd) {
        await this.verifyThatIsLoginPage();
        await this.loginField.fill(loginName);
        await this.passwordField.fill(passowrd);
        await this.submitButton.click();
    }

    async clickOnSignUpButton() {
        await this.signUpButton.click();
    }

    async verifyThatIsLoginPage() {
        await expect(this.IDOfThePage).toBeVisible();
    }
}