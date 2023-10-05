// baseTest.ts
import {chromium, Browser, BrowserContext, test} from '@playwright/test';
import * as fs from "fs";

export class BaseTest {
    protected browser: Browser;
    protected context: BrowserContext;
    public baseURL: string;
    public adminURL: string;
    public userName: string;
    public userPassword: string;
    public adminName: string;
    public adminPassword: string;
    public creatorName: string;
    public creatorPassword: string;

    async setup() {
        this.browser = await chromium.launch({
            // Common launch options for all tests
            headless: false,
            devtools: true,
            args: ['--start-maximized'],
            // ... other options ...
        });

        this.context = await this.browser.newContext({
            // Common context options for all tests
            // You can set viewport, permissions, etc. here
        });

        //set URL actually will be provided from github secrets
         this.baseURL = process.env.BASE_URL;
         this.adminURL = process.env.ADMIN_URL;

        //set username and pass actually will be provided from github secrets
         this.userName = process.env.USER_NAME;
         this.userPassword = process.env.USER_PASSWORD;

        //set admin and pass actually will be provided from github secrets
         this.adminName = process.env.ADMIN_NAME;
         this.adminPassword = process.env.ADMIN_PASSWORD;

        //set creator and pass actually will be provided from github secrets
         this.creatorName = process.env.CREATOR_NAME;
         this.creatorPassword = process.env.CREATOR_PASSWORD;


    }

    async teardown() {
        await this.context.close();
        await this.browser.close();
    }
}
