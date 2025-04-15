export class loginPage{

    navigate(url){

        cy.visit(url)

    }
    clickLogin(btn){

        cy.get(btn).click()
        cy.wait(1000)
    }

    loginModal(user, pass, btn){
        const username= Cypress.env('username')

        cy.get(user).type(username)
        cy.wait(2000)
        cy.get(pass).type(Cypress.env('password'))
        cy.wait(2000)
        cy.xpath(btn).click()
        cy.wait(2000)
    }
    verifyLogin(name){
        cy.get(name)  
        .should('be.visible')  // Check if the username element is visible
        .and('contain.text', Cypress.env('username'))
        .then(($el) => {
            // This will print the actual text content of the element in the Cypress command log
            cy.log('User name displayed: ' + $el.text());
            
            // This will print the actual text content to the browser console
            console.log('User name displayed: ' + $el.text());
          });

    }

}