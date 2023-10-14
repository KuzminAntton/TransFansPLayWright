import type { Page, Locator } from '@playwright/test';
import {expect} from "@playwright/test";

export class MyProfilePage {
    private readonly homePageID: Locator;
    private readonly socialTab: Locator;
    private readonly explorelTab: Locator;
    private readonly chatTab: Locator;
    private readonly profileNotLoggedUserButton: Locator;
    private readonly editProfileButton: Locator;
    constructor(readonly page : Page) {
        this.homePageID = this.page.locator('css=#home-page');
        this.socialTab = this.page.locator('xpath=.//div[contains(text(), "Social")]');
        this.explorelTab = this.page.locator('xpath=.//div[contains(text(), "Explore")]');
        this.chatTab = this.page.locator('xpath=.//span[contains(text(), "Edit Profile")]');
        this.profileNotLoggedUserButton = this.page.locator('xpath=.//div[@class="cursorPtr"]')
        this.editProfileButton = this.page.locator('xpath=.//span[contains(text(), "Edit Profile")]')
    }


    async clickOnEditProfileButton() {
        await this.editProfileButton.click();
    }

    async verifyUserInfo(user) {
        await expect(this.page.locator(`xpath=.//p[contains(text(), "${user.first_name}")]`)).toBeVisible();
        await expect(this.page.locator(`xpath=.//p[contains(text(), "${user.last_name}")]`)).toBeVisible()
        await expect(this.page.locator(`xpath=.//p[contains(text(), "${user.username}")]`)).toBeVisible();
    }

}