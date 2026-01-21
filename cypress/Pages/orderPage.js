export class OrderPage {

    // Locators
    cartButton = 'a:contains("Cart")';
    placeOrderBtn = '//button[normalize-space()="Place Order"]';
    nameInput = '#name';
    countryInput = '#country';
    cityInput = '#city';
    cardInput = '#card';
    monthInput = '#month';
    yearInput = '#year';
    purchaseBtn = 'button:contains("Purchase")';
    successMsg = '.lead';
    okBtn = '.confirm';

    // Navigate to URL
    navigate(url) {
        cy.visit(url);
    }

    // Click Cart
    clickCart() {
        cy.get(this.cartButton).should('be.visible').click();
        cy.wait(1000);
    }

    // Place order using provided data
    placeOrder(orderData) {
        cy.xpath(this.placeOrderBtn).click();
        cy.wait(500);

        cy.get(this.nameInput).clear().type(orderData.name, { delay: 50 });
        cy.get(this.countryInput).clear().type(orderData.country, { delay: 50 });
        cy.get(this.cityInput).clear().type(orderData.city, { delay: 50 });
        cy.get(this.cardInput).clear().type(orderData.card, { delay: 50 });
        cy.get(this.monthInput).clear().type(orderData.month, { delay: 50 });
        cy.get(this.yearInput).clear().type(orderData.year, { delay: 50 });

        cy.get(this.purchaseBtn).click();
        cy.wait(1000);
    }

    // Verify purchase success and click OK
    verifyPurchase() {
        cy.get(this.successMsg)
          .should('be.visible')
          .then(($el) => {
              cy.log('Purchase message: ' + $el.text());
              console.log('Purchase message: ' + $el.text());
          });
        cy.get(this.okBtn).click();
        cy.wait(500);
    }
}
