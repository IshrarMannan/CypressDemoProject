import { LoginPage } from "../../Pages/loginPage";
import { AddToCartPage } from "../../Pages/addToCartPage";
import { OrderPage } from "../../Pages/orderPage";
import { RandomData } from "../../support/randomData";
import { LogoutPage } from "../../Pages/logoutPage";

const logout = new LogoutPage(); 
const login = new LoginPage();
const cart = new AddToCartPage();
const order = new OrderPage();
const randomData = new RandomData();

describe('Place Order Test', () => {
    let username, password;
    let orderInfo;

    before(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        // Read existing user credentials
        cy.readFile('cypress/fixtures/userData.json').then((user) => {
            username = user.username;
            password = user.password;
        });

        // Navigate to base URL
        login.navigate(Cypress.env('baseUrl'));

        // Generate random order info
        orderInfo = randomData.generateRandomOrderData();
    });

    it('should login using existing user', () => {
        login.openLoginModal();
        login.login(username, password); 
        login.clickLoginBtn();
        login.verifyLogin(username);
    });

    it('should add product to cart', () => {
        cart.clickLaptop();
        cart.addToCart();
        cart.verifyProductAdded();
    });

    it('should place the order', () => {
        order.clickCart();
        order.placeOrder(orderInfo);
        order.verifyPurchase();
    });
    after(() => {
      logout.clickLogout(); // click logout and verify
    });
});
