describe ('Login page', ()=>{
    it ('login page should be visible', ()=>{
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
    // Valid login with standard user
    it.skip('Valid login with standard user with valid password',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
    })
    //invalid login with incorrect username
    it ('invalid login with incorrect username',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type("Tester")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service')
    })
})