import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ClientServicesPage } from '../pages/ClientServicesPage';
import 'dotenv/config';

let loginPage;
let dashboardPage;
let clientServicesPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    clientServicesPage = new ClientServicesPage(page);

    await loginPage.navigateTo();
    await loginPage.enterUsername(process.env.Test_Username);
    await loginPage.enterPassword(process.env.Test_Password);
    await loginPage.selectEntity();
    await loginPage.submit();

    await dashboardPage.goToClientServicesPage();
});

test.afterEach('CleanUp',async () => {
    await clientServicesPage.unlockCardPreventiveBlocking();
});

test.describe('BlockPreventiveBlocking-Test', () => {

    test('Should be able to block a card preventively', async () => {
        await clientServicesPage.searchCard('0000000203009767');
        await clientServicesPage.blockCardPreventiveBlocking();
    });
});
