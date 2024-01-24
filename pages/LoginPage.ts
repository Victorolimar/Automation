import { Page, Locator} from '@playwright/test'
import { BASE_URL } from '../context/baseUrl';

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

    async navigate(){
        await this.page.goto(BASE_URL);
    }

    async enterUsername(username){
        await this.usernameField.click();
        await this.usernameField.fill(username);
    }

    async enterPassword(password){
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