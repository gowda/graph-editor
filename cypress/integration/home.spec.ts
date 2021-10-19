describe('Home', () => {
  beforeEach(() => cy.visit('http://localhost:3000'));

  it('shows "Authorize" button', () => {
    cy.get('button').should('have.text', 'Authorize');
  });
});
