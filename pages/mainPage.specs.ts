import type { Page, Locator } from '@playwright/test';
import {expect} from "@playwright/test";

export class MainPage {
    private readonly homePageID: Locator;
    private readonly socialTab: Locator;
    private readonly explorelTab: Locator;
    private readonly chatTab: Locator;
    private readonly profileNotLoggedUserButton: Locator;
    private readonly profileButtonImg: Locator;
    private readonly profileButton: Locator;
    private readonly faceBookFooterLink: Locator;
    private readonly instagramFooterLink: Locator;
    private readonly tiktokFooterLink: Locator;
    private readonly youtubeFooterLink: Locator;
    constructor(readonly page : Page) {
        this.homePageID = this.page.locator('css=#home-page');
        this.socialTab = this.page.locator('xpath=.//div[contains(text(), "Social")]');
        this.explorelTab = this.page.locator('xpath=.//div[contains(text(), "Explore")]');
        this.chatTab = this.page.locator('xpath=.//div[contains(text(), "Chat")]');
        this.profileNotLoggedUserButton = this.page.locator('xpath=.//div[@class="cursorPtr"]')
        this.profileButtonImg = this.page.locator('xpath=.//img[@alt="logoUser"]')
        this.profileButton = this.page.locator('xpath=.//span[contains(text(), "Profile")]')

        //footer links
        this.faceBookFooterLink = this.page.locator('css=img[src="/TransFans/images/icons/social-facebook.svg"]');
        this.instagramFooterLink = this.page.locator('css=img[src="/TransFans/images/icons/social-insta.svg"]');
        this.tiktokFooterLink = this.page.locator('css=img[src="/TransFans/images/icons/social-tiktok.svg"]');
        this.youtubeFooterLink = this.page.locator('css=div.jsx-473409187 a[href="https://www.youtube.com/transfans"] img[src="/TransFans/images/icons/social-youtube.svg"]')
    }

    async clickOnFacebookFooterLink() {
        await this.faceBookFooterLink.click();
    }

    async clickOnInstagramFooterLink() {
        await this.instagramFooterLink.click();
    }

    async clickOnTiktokFooterLink() {
        await this.tiktokFooterLink.click();
    }

    async clickOnYoutubeFooterLink() {
        await this.youtubeFooterLink.click();
    }

    async clickOnProfileNotLoggedUserButton() {
        await this.profileNotLoggedUserButton.click();
    }

    async clickOnProfileButtonIMG() {
        await this.profileButtonImg.click();
    }

    async clickOnProfileButton() {
        await this.profileButton.click();
    }

    async moveToProfile() {
        await this.clickOnProfileButtonIMG();
        await this.clickOnProfileButton();
    }

    async clickOnSocialTab() {
        await this.socialTab.click();
    }

    async clickOnExploreTab() {
        await this.explorelTab.click();
    }

    async clickOnChatTab() {
        await this.chatTab.click();
    }

    async verifyThatIsMainPage(page) {
        await this.page.waitForLoadState();
        await expect(this.homePageID).toBeVisible()
    }
}