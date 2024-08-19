describe ('Product page', ()=>{
    it ('product page should be visible', ()=>{
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();

        cy.url().should('include','/inventory.html');
        cy.contains('Swag Labs');
        cy.get('#shopping_cart_container').should('be.visible').click();
        cy.url().should('include','/cart.html');
        

     })
    })