import type { Page, Locator } from '@playwright/test';
import {expect} from "@playwright/test";
import {MainPage} from "../mainPage.specs";

export class SocialTab {
    private readonly popularTab: Locator;
    private readonly latestTab: Locator;
    private readonly popularContent: Locator;

     constructor(readonly page : Page) {
         this.popularTab = this.page.locator('xpath=.//a[contains(text(), "Popular")]');
         this.latestTab = this.page.locator('xpath=.//a[contains(text(), "Latest")]');
         this.popularContent = this.page.locator('css=#Popular');
    }
    async verifyThatIsSocialTab(page, URL) {
        await page.waitForLoadState();
        await expect(page).toHaveURL(URL);
        await expect(this.popularTab).toBeVisible();
        await expect(this.latestTab).toBeVisible();
        await expect(this.popularContent).toBeVisible();
    }

    async clickOnLatest() {
         await this.latestTab.click();
    }
}