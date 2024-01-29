import { Page, Locator, expect} from '@playwright/test'

export class ClientServicesPage {

    readonly page: Page;
    readonly searchField: Locator;
    readonly transactionButton: Locator;
    readonly transactionSelectorDefault:Locator;
    readonly transactionSelectorAltered: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator('#searchText');
        this.transactionButton = page.locator('#simple-dropdown');
        //this.transactionSelector = page.getByLabel('Select box activate');
        //this.transactionSelector = page.locator('panel').filter({ hasText: 'Seleccione Transacción' }).getByLabel('Select box activate');
        this.transactionSelectorDefault = page.locator('span.btn.btn-default.form-control.ui-select-toggle[aria-label="Select box activate"]');
        
    }

    async searchCard(cardNumber: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.getByRole('combobox').selectOption('Tarjeta');
        await this.page.getByPlaceholder('Número de Tarjeta').click();
        await this.searchField.fill(cardNumber);
        await this.page.getByRole('button', { name: '' }).click();
    }

    async blockCardPreventiveBlocking() {
        await this.transactionButton.click();
        await this.transactionSelectorDefault.click();
        await this.page.getByText('Bloquear Preventivamente').click();
        await this.page.locator('panel').filter({ hasText: 'Causal de Bloqueo Causal de' }).getByLabel('Select box activate').click();
        await this.page.getByText('ACTUALIZAR INFORMACION').click();
        await this.page.getByRole('button', { name: 'Aceptar' }).click();
        await this.page.locator('div').filter({ hasText: /^Aceptar$/ }).getByRole('button').click();
    }

    async unlockCardPreventiveBlocking() {
        await this.transactionButton.click();
        await this.transactionSelectorAltered.click();
        await this.page.getByText('Levantar Bloqueo Preventivo').click();
        await this.page.getByRole('gridcell', { name: 'No' }).locator('div').click();
        await this.page.getByRole('checkbox').check();
        await this.page.getByRole('button', { name: 'Aceptar' }).click();
        await this.page.locator('div').filter({ hasText: /^Aceptar$/ }).getByRole('button').click();
    }
}