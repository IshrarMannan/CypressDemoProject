export class addToCartPage{

    navigate(url){

        cy.visit(url)

    }
    clickLaptop(Lbtn){

        cy.contains(Lbtn).should('be.visible').click();
        cy.wait(1000)
    }

    addToCart(prod, add){ 

        cy.xpath(prod).click()
        cy.wait(2000)
        cy.xpath(add).click()
    }
   /* verifyLogin(name){
        cy.get(name)  
        .should('be.visible')  // Check if the username element is visible
        .and('contain.text', Cypress.env('username'))
        .then(($el) => {
            // This will print the actual text content of the element in the Cypress command log
            cy.log('User name displayed: ' + $el.text());
            
            // This will print the actual text content to the browser console
            console.log('User name displayed: ' + $el.text());
          });

    }*/

}