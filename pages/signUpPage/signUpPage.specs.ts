import type { Page, Locator } from '@playwright/test';
import {expect} from "@playwright/test";

export class SignUpPage {
    private readonly userTab: Locator;
    private readonly firstNameField: Locator;
    private readonly lastNameField: Locator;
    private readonly userNameField: Locator;
    private readonly emailField: Locator;
    private readonly passwordField: Locator;
    private readonly signUpButton: Locator;
    private readonly referalCode: Locator;
    constructor(readonly page : Page) {
        this.userTab = this.page.locator('xpath=.//div[contains(text(), "User")]');
        this.firstNameField = this.page.locator('css=#firstName');
        this.lastNameField = this.page.locator('xpath=.//input[@name="lastName"]')
        this.userNameField = this.page.locator('css=#userName');
        this.emailField = this.page.locator('css=#email');
        this.passwordField = this.page.locator('xpath=.//input[@name="password"]');
        this.signUpButton = this.page.locator('xpath=.//span[contains(text(), "Sign up")]');
        this.referalCode = this.page.locator('xpath=.//input[@placeholder="Enter Referral code"]')

    }

    async clickOnUserTab() {
        await this.userTab.click();
    }

    async fillFirstNameField(firstName) {
        await this.firstNameField.fill(firstName);
    }

    async fillLastNameField(lastName) {
        await this.lastNameField.fill(lastName);
    }

    async fillUsernameField(username) {
        await this.userNameField.fill(username);
    }

    async fillEmailField(email) {
        await this.emailField.fill(email);
    }

    async fillPasswordField(pasword) {
        await this.passwordField.fill(pasword);
    }

    async fillUserForm(user) {
        await this.page.waitForLoadState();
        // await this.page.waitForTimeout(10000);
        await this.page.waitForTimeout(3000);
        await this.fillPasswordField(user.password);
        await this.page.waitForTimeout(3000);
        await this.fillUsernameField(user.username);
        await this.page.waitForTimeout(3000);
        await this.fillEmailField(user.email);

    }

    async clickSignUpButton() {
        await this.signUpButton.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(3000);
        // await this.page.evaluate(() => {
        //     const xpath = './/span[contains(text(), "Sign up")]/ancestor::button';
        //     const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
        //     const btn = iterator.iterateNext();
        //     if (btn) {
        //         (btn as HTMLButtonElement).disabled = false;
        //     }
        // });
        // // class="jsx-4139622682 my-3"
        // await this.referalCode.click();
        // await this.page.waitForTimeout(3000);
        // // await this.page.click('.my-3.jsx-4139622682:nth-of-type(3)');
        // await this.page.locator('xpath=.//span[contains(text(), "Sign up")]').click();
        await this.page.locator('xpath=.//span[contains(text(), "Sign up")]').click();
    }


    async verifyThatIsSignInPage(page) {
        await this.page.waitForLoadState();
        await expect(this.userTab).toBeVisible()
    }
}