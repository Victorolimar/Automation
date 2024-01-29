import { Page, Locator} from '@playwright/test'
//import { BASE_URL } from '../context/Constants';

export class LoginPage{

    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly entityField: Locator;

    constructor (page:Page){
        this.page = page;
        this.usernameField = page.getByPlaceholder('Digite su usuario');
        this.passwordField = page.getByPlaceholder('Digite su contraseña');
        this.entityField = page.locator('select#entity');
    }

    async navigateTo(){
        await this.page.goto('/PH/#/login');
    }

    async enterUsername(username: string){
        await this.usernameField.click();
        await this.usernameField.fill(username);
    }

    async enterPassword(password: string){
        await this.passwordField.click();
        await this.passwordField.fill(password);
    }

    async selectEntity() {
        await this.entityField.click();   
    }

    async submit(){
        await this.page.getByRole('button',{name: 'Ingresar'}).click();
    }
}