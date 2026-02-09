export class AddToCartPage {

    // Locators
    laptopCategory = 'Laptops';
    productSonyVaio = '//a[normalize-space()="Sony vaio i5"]';
    addToCartButton = '//a[normalize-space()="Add to cart"]';

    // Navigate to any URL
    navigate(url) {
        cy.visit(url);
    }

    // Click on Laptop category
    clickLaptop() {
        cy.contains(this.laptopCategory)
          .should('be.visible')
          .click();
    }

    // Select product and add to cart
    addToCart() {
        cy.xpath(this.productSonyVaio).click();
        cy.xpath(this.addToCartButton)
          .should('be.visible')
          .click();
    }

    // Optional: verify product added alert
    verifyProductAdded() {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added.');
        });
    }
}
