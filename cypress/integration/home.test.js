describe('The Home Page', () => {
  const getButton = name => cy.findByRole('button', { name });

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('allows you to fill out the form', () => {
    getButton('get-started').click();
    cy.location('pathname').should('eq', '/review');
  });
});
