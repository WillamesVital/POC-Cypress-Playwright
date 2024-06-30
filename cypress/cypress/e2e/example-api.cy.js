describe('JSONPlaceholder API Tests', () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com';
  
    it('should fetch a list of posts', () => {
      cy.request(`${apiUrl}/posts`)
        .its('status')
        .should('equal', 200);
    });
  
    it('should fetch a single post', () => {
      cy.request(`${apiUrl}/posts/1`)
        .its('body')
        .should('include', { id: 1 });
    });
  
    it('should create a new post', () => {
      cy.request('POST', `${apiUrl}/posts`, {
        title: 'foo',
        body: 'bar',
        userId: 1
      })
        .its('body')
        .should('include', {
          title: 'foo',
          body: 'bar',
          userId: 1
        });
    });
  });
  
  