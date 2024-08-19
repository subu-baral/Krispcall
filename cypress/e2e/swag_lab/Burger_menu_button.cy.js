describe ('Product page', ()=>{
    it ('product page should be visible', ()=>{
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();

        cy.url().should('include','/inventory.html');
        cy.contains('Swag Labs'); 

        // Click on burger menu button 
        cy.get('#react-burger-menu-btn').should('be.visible').and('be.enabled');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#inventory_sidebar_link').should('be.visible');
        cy.get('#inventory_sidebar_link').should('have.text', 'All Items').and('have.attr', 'href', '#');
        // cy.get('#inventory_sidebar_link').click();
       
        //cy.url().should('include', 'https://www.saucedemo.com/inventory.html');
        cy.get('#about_sidebar_link').should('be.visible');
        cy.get('#about_sidebar_link').should('have.text','About').and('have.attr','href','https://saucelabs.com/');
       
        // // cy.wait(5000);
       // cy.go('back');
        //cy.wait(5000);
        //cy.url().should('include','/inventory.html');
        cy.get('#logout_sidebar_link').should('be.visible');
        cy.get('#logout_sidebar_link').should('have.text','Logout').and('have.attr', 'href', '#');
       
        cy.url().should('include','saucedemo.com');
        cy.get('#user-name').clear().type("standard_user");
        cy.get('#password').clear().type("secret_sauce");
        cy.get('#login-button').click();

        cy.get('#react-burger-menu-btn').should('be.visible').and('be.enabled');
        cy.get('#react-burger-menu-btn').click();

         
        cy.get('#reset_sidebar_link').should('be.visible');
        cy.get('#reset_sidebar_link').should('have.text','Reset App State').and('have.attr', 'href', '#');
        cy.get ('body',{timeout:3000}).type('{esc}');
   
        //cy.get('#inventory_sidebar_link').click();
        //cy.url().should('include','/inventory.html');

        //cy.get('#about_sidebar_link').click();
        //cy.url().should('include', '//saucelabs.com/');
       

    })
})