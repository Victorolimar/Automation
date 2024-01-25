import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { ClientServicesPage } from '../pages/ClientServicesPage';

let loginPage;
let dashboardPage;
let clientServicesPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    clientServicesPage = new ClientServicesPage(page);

    await loginPage.navigate();
    await loginPage.enterUsername('CSPRUEBAS02');
    await loginPage.enterPassword('Ev3E7*/u7f');
    await loginPage.selectEntity();
    await loginPage.submit();

    await dashboardPage.navigateToClientServicesPage();
});

test.afterEach(async () => {
    await clientServicesPage.unlockCardPreventiveBlocking();
});

test('BlockPreventiveBlocking-Test', async () => {
    await clientServicesPage.searchCard();
    await clientServicesPage.blockCardPreventiveBlocking();
});
