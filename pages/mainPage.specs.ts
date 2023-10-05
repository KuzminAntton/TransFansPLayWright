import type { Page, Locator } from '@playwright/test';
import {expect} from "@playwright/test";

export class MainPage {
    private readonly homePageID: Locator;

    constructor(readonly page : Page) {
        this.homePageID = this.page.locator('css=#home-page');
    }


    async verifyThatIsMainPage(page) {
        await page.waitForLoadState();
        await expect(this.homePageID).toBeVisible()
    }
}