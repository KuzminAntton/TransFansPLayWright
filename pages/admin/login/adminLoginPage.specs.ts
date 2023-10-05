import type { Page, Locator } from '@playwright/test';
import {expect} from "@playwright/test";

export class AdminLoginPage {
    private readonly loginField: Locator;
    private readonly passwordField: Locator;
    private readonly submitButton: Locator;

    constructor(readonly page : Page) {
        this.loginField = this.page.locator('css=#email');
        this.passwordField = this.page.locator('css=#password-field');
        this.submitButton = this.page.locator('xpath=.//button[@type="submit"]');
    }

    async logIn(loginName, passowrd) {
        await this.loginField.fill(loginName);
        await this.passwordField.fill(passowrd);
        await this.submitButton.click();
    }

}