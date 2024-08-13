describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.contains('Swag Labs')

    cy.get('#user-name').type("standard_user");
    cy.get('#password').type("secret_sauce");
    cy.get('#login-button').click();
  })
})