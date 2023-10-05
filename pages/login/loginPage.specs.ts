import type { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly loginField: Locator;
    private readonly passwordField: Locator;
    private readonly submitButton: Locator;

    constructor(readonly page : Page) {
        this.loginField = this.page.locator('css=#dv_email_usr');
        this.passwordField = this.page.locator('xpath=//input[@type="password"]');
        this.submitButton = this.page.locator('css=#logIn1');
    }

    async logIn(loginName, passowrd) {
        await this.loginField.fill(loginName);
        await this.passwordField.fill(passowrd);
        await this.submitButton.click();
    }

    async waitForElement(locator) {
        this.page.waitForSelector(locator);
    }
}