import { Page, Locator, ElementHandle} from '@playwright/test'
import { link } from 'fs';

export class DashboardPage {

    readonly page: Page;
    readonly clientServicesLink: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.clientServicesLink = page.locator(".ng-scope[arcajs-module-id='518']");
    }

    async goToClientServicesPage() { 
        await this.clientServicesLink.click();
    }
}