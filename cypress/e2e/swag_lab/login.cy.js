describe ('Login page', ()=>{
    it ('Valid login with standard user', ()=>{
        // visit the swag lab page
        cy.visit('https://www.saucedemo.com/')
        cy.contains('Swag Labs')
        // placeholders should be visible and clickable
        cy.get('input[name="user-name"]').should('have.attr', 'placeholder', 'Username').click()
        cy.get('input[name="password"]').should('have.attr', 'placeholder', 'Password').click()
         cy.get('input[name="login-button"]').should('have.value', 'Login').click()
      //  Cypress.Commands.add('clickUsernameField', (selector) => {
        //    cy.get(selector).should('be.visible').and('have.attr', 'placeholder').click();
       // })
        //Cypress.Commands.add('clickPasswordField', (selector) => {
         //   cy.get(selector).should('be.visible').and('have.attr', 'placeholder').click();
       // })
    })
})