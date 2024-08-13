describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.contains('Swag Labs')
    
    cy.get('input[name="Username"]').type(standard_user);
    cy.get('input[name="Password"]').type(secret_sauce);
    cy.get('button[type="Login"]').click();
  })
})