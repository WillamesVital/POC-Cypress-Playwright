import LoginPage from '../support/pages/login_page';

describe('Login Test', () => {
  it('should login successfully', () => {
    const loginPage = new LoginPage();
    
    loginPage.visit();
    loginPage.fillUsername('testuser');
    loginPage.fillPassword('password');
    loginPage.submit();
    
    // Adicione verificações adicionais aqui
    cy.url().should('include', '/dashboard');
  });
});
