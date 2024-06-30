describe('template spec', () => {
  it('has title playwright', () => {
    cy.visit('https://playwright.dev/')

    cy.contains('Playwright')
      .should('be.visible')
  })

  it('get started link', () => {
    cy.visit('https://playwright.dev/')

    cy.contains('a', 'Get started').click()

    cy.contains('h1', 'Installation')
      .should('be.visible')
  })
  it('should have the correct title', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('contain', 'Example Domain');
  });
})

