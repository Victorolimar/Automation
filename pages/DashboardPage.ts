import { Page, Locator} from '@playwright/test'

export class DashboardPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToDashboard() { 
        await this.page.locator('div').filter({ hasText: /^Servicio al ClienteAfiliaciónInformación de controlGestión$/ }).locator('a').first().click();
        await this.page.getByRole('combobox').selectOption('object:59');
    }

    async performDashboardAutomation() {
        await this.navigateToDashboard();
        await this.page.getByPlaceholder('Número de Tarjeta').click();
        await this.page.locator('#searchText').fill('0000000203009767');
        await this.page.getByRole('button', { name: '' }).click();
        await this.page.locator('#simple-dropdown').click();
        await this.page.getByLabel('Select box activate').click();
        await this.page.getByText('Bloquear Preventivamente').click();    
    }
}