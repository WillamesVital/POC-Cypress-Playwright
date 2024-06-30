const { test, expect } = require('@playwright/test');
const LoginPage = require('./pages/login_page');

test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.visit();
  await loginPage.fillUsername('testuser');
  await loginPage.fillPassword('password');
  await loginPage.submit();
  
  // Adicione verificações adicionais aqui
  await expect(page).toHaveURL(/.*dashboard/);
});
