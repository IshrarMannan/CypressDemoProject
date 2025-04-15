export class orderPage{

    navigate(url){

        cy.visit(url)

    }
    clickCart(cart){

        cy.contains(cart).should('be.visible').click();
        cy.wait(2000)
    }

    placeOrder(placeOrd, name, country, city, card, month, year, purchase){ 

        const username= Cypress.env('username')

        //clicking on Place Order button
        cy.xpath(placeOrd).click()
        cy.wait(1000)

        //Inputting values
        cy.get(name).type('username')
        cy.get(country).type('Bangladesh')
        cy.get(city).type('Dhaka')
        cy.get(card).type('98024783912309697')
        cy.get(month).type('April')
        cy.get(year).type('2025')
        cy.contains(purchase).click()
        cy.wait(1000)
    }
    purchaseSuccess(msg, confirm){ 

        //Get confirmation msg
        cy.get(msg).should('be.visible')
        .then(($el) => {
            // This will print the actual text content of the element in the Cypress command log
            cy.log('User name displayed: ' + $el.text());
            
            // This will print the actual text content to the browser console
            console.log('User name displayed: ' + $el.text());
          });
        cy.wait(1000)
        cy.screenshot('SuccessImage')

        //clicking on ok
        cy.get(confirm).click()
        cy.wait(1000)
    }

}