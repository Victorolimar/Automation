import { Page, Locator, expect} from '@playwright/test'

export class ClientServicesPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async searchCard() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.getByRole('combobox').selectOption('Tarjeta');
        await this.page.getByPlaceholder('Número de Tarjeta').click();
        await this.page.locator('#searchText').fill('0000000203009767');
        await this.page.getByRole('button', { name: '' }).click();
    }

    async blockCardPreventiveBlocking() {
        await this.page.locator('#simple-dropdown').click();
        await this.page.getByLabel('Select box activate').click();
        await this.page.getByText('Bloquear Preventivamente').click();
        await this.page.locator('panel').filter({ hasText: 'Causal de Bloqueo Causal de' }).getByLabel('Select box activate').click();
        await this.page.getByText('ACTUALIZAR INFORMACION').click();
        await this.page.getByRole('button', { name: 'Aceptar' }).click();
        await this.page.locator('div').filter({ hasText: /^Aceptar$/ }).getByRole('button').click();
    }

    async unlockCardPreventiveBlocking() {
        await this.page.locator('#simple-dropdown').click();
        await this.page.getByLabel('Select box activate').click();
        await this.page.getByText('Levantar Bloqueo Preventivo').click();
        await this.page.getByRole('gridcell', { name: 'No' }).locator('div').click();
        await this.page.getByRole('checkbox').check();
        await this.page.getByRole('button', { name: 'Aceptar' }).click();
        await this.page.locator('div').filter({ hasText: /^Aceptar$/ }).getByRole('button').click();
    }
}