import type { Page, Locator } from '@playwright/test';
import {expect} from "@playwright/test";

export class MainAdminPage {

    async verifyThatIsMainAdminPage(profileName, page) {
        await page.waitForLoadState();
        profileName = profileName.split('@')[0]
        await expect(page.locator(`xpath=.//div[contains(text(), "${profileName}")]`)).toBeVisible()
    }
}