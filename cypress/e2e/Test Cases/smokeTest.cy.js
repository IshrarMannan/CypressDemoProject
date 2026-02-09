import { SignupPage } from "../../Pages/signupPage";
import { LoginPage } from "../../Pages/loginPage";
import { AddToCartPage } from "../../Pages/addToCartPage";
import { OrderPage } from "../../Pages/orderPage";
import { LogoutPage } from "../../Pages/logoutPage";
import { RandomData } from "../../support/randomData";

const signup = new SignupPage();
const login = new LoginPage();
const cart = new AddToCartPage();
const order = new OrderPage();
const logout = new LogoutPage();
const randomData = new RandomData();

describe('Demoblaze Smoke Test - Full User Journey', () => {
  let username, password;
  let orderInfo;

  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    // Generate random user credentials
    const user = randomData.generateRandomData();
    username = user.username;
    password = user.password;

    // Write to fixture for login step
    cy.writeFile('cypress/fixtures/userData.json', { username, password });

    // Navigate to base URL
    signup.navigate(Cypress.env('baseUrl'));

    // Generate random order info
    orderInfo = randomData.generateRandomOrderData();
  });

  it('should signup successfully', () => {
    signup.clickSignup();
    signup.signupModal(username, password);

    cy.on('window:alert', (text) => {
      expect(['Sign up successful.', 'This user already exist.']).to.include(text);
    });
  });

  it('should login using the new user', () => {
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
    logout.clickLogout();
  });
});
