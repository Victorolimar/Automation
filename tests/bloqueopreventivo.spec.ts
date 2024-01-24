import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CardManagementPage } from '../pages/CardManagementPage';

test('test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cardManagementPage = new CardManagementPage(page);

    await loginPage.navigate();
    await loginPage.enterUsername('CSPRUEBAS02');
    await loginPage.enterPassword('Ev3E7*/u7f');
    await loginPage.selectEntity();
    await loginPage.submit();

    await dashboardPage.navigateToClientServicesPage();

    await dashboardPage.performDashboardAutomation();
    await cardManagementPage.performCardManagementAutomation();
    await cardManagementPage.performCardManagementAutomation_2();

});