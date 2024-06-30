describe('Sample Test', () => {
    it('should have the correct title', () => {
      cy.visit('https://example.com');
      cy.get('h1').should('contain', 'Example Domain');
    });
  });
  