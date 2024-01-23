import { Page, Locator} from '@playwright/test'
import { BASE_URL } from '../context/baseUrl';

export class LoginPage{
    readonly page: Page;
    readonly usernameField: Locator;

    constructor (page:Page){
        this.page = page;
        this.usernameField = page.getByPlaceholder('Digite su usuario');
    }

    async navigate(){
        await this.page.goto(BASE_URL);
    }

    async enterUsername(username){
        await this.usernameField.click();
        await this.usernameField.fill(username);
    }

    async enterPassword(password){
        await this.page.getByPlaceholder('Digite su contraseña').click();
        await this.page.getByPlaceholder('Digite su contraseña').fill(password);
    }

    async submit(){
        await this.page.getByRole('button',{name: 'Ingresar'}).click()
    }
}