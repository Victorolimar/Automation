import { Page, Locator, ElementHandle} from '@playwright/test'
import { link } from 'fs';

export class DashboardPage {

    readonly page: Page;
    readonly clientServicesLink: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.clientServicesLink = page.locator(".ng-scope[arcajs-module-id='518']");
        //this.clientServicesLink = page.locator('div').filter({ hasText: /^Servicio al ClienteAfiliaciónInformación de controlGestión$/ }).locator('a').first();
    }

    async navigateToClientServicesPage() { 
        await this.clientServicesLink.click();
    }
}