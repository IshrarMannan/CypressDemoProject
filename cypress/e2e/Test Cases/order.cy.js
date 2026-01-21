import { OrderPage } from "../../Pages/orderPage";
import { RandomData } from "../../support/randomData";

const order = new OrderPage();
const randomData = new RandomData();

describe('Place Order Test', () => {
    let orderInfo;

    before(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        // Navigate to site
        order.navigate(Cypress.env('baseUrl'));

        // Generate random order data from RandomData class
        orderInfo = randomData.generateRandomOrderData();
    });

    it('should place a new order', () => {
        // Go to Cart
        order.clickCart();

        // Place order with random data
        order.placeOrder(orderInfo);

        // Verify success
        order.verifyPurchase();
    });
});
