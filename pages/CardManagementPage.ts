import { Page, Locator, expect} from '@playwright/test'

export class CardManagementPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToCardManagement() {
        await this.page.locator('panel').filter({ hasText: 'Causal de Bloqueo Causal de' }).getByLabel('Select box activate').click();
    }

    async performCardManagementAutomation() {
        await this.navigateToCardManagement();
        await this.page.getByText('ACTUALIZAR INFORMACION').click();
        await this.page.getByRole('button', { name: 'Aceptar' }).click();
        await this.page.locator('div').filter({ hasText: /^Aceptar$/ }).getByRole('button').click();
    }

    async performCardManagementAutomation_2(){
        await this.page.getByText('TARJETA CON BLOQUEO PREVENTIVO').click();
        await expect(this.page.getByText('TARJETA CON BLOQUEO PREVENTIVO')).toBeVisible();
        await expect(this.page.locator('#object-viewer-container')).toContainText('22 TARJETA CON BLOQUEO PREVENTIVO');
        await this.page.locator('#simple-dropdown').click();
        await this.page.getByLabel('Select box activate').click();
        await this.page.getByText('Levantar Bloqueo Preventivo').click();
        await this.page.getByRole('gridcell', { name: 'No' }).locator('div').click();
        await this.page.getByRole('checkbox').check();
        await this.page.getByRole('button', { name: 'Aceptar' }).click();
        await this.page.locator('div').filter({ hasText: /^Aceptar$/ }).getByRole('button').click();

    }
    
}