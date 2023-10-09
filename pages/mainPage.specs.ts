import type { Page, Locator } from '@playwright/test';
import {expect} from "@playwright/test";

export class MainPage {
    private readonly homePageID: Locator;
    private readonly socialTab: Locator;
    private readonly explorelTab: Locator;
    private readonly chatTab: Locator;
    constructor(readonly page : Page) {
        this.homePageID = this.page.locator('css=#home-page');
        this.socialTab = this.page.locator('xpath=.//div[contains(text(), "Social")]');
        this.explorelTab = this.page.locator('xpath=.//div[contains(text(), "Explore")]');
        this.chatTab = this.page.locator('xpath=.//div[contains(text(), "Chat")]');
    }

    async clickOnSocialTab() {
        this.socialTab.click();
    }

    async clickOnExploreTab() {
        this.explorelTab.click();
    }

    async clickOnChatTab() {
        this.chatTab.click();
    }

    async verifyThatIsMainPage(page) {
        await page.waitForLoadState();
        await expect(this.homePageID).toBeVisible()
    }
}