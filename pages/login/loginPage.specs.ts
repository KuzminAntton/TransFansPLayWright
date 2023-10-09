import type { Page, Locator } from '@playwright/test';
import {expect} from "@playwright/test";

export class LoginPage {
    private readonly idOfThePage: Locator;
    private readonly loginField: Locator;
    private readonly passwordField: Locator;
    private readonly submitButton: Locator;

    constructor(readonly page : Page) {
        this.idOfThePage = this.page.locator('css=#login_cont');
        this.loginField = this.page.locator('css=#dv_email_usr');
        this.passwordField = this.page.locator('xpath=//input[@type="password"]');
        this.submitButton = this.page.locator('css=#logIn1');
    }

    async logIn(loginName, passowrd) {
        await this.verifyThatIsLoginPage();
        await this.loginField.fill(loginName);
        await this.passwordField.fill(passowrd);
        await this.submitButton.click();
    }

    async verifyThatIsLoginPage() {
        await expect(this.idOfThePage).toBeVisible();
    }
}