import { loginPage } from "../../Pages/loginPage"
import { signupPage } from "../../Pages/signupPage"
import { addToCartPage } from "../../Pages/addToCartPage"

const login = new loginPage()
const sign = new signupPage()
const cart = new addToCartPage()

describe('Demoblaze Test', () => {

  before('before test cases', () => {

    //manually clearing before running at first so that if we run again it clears the previous session
    cy.clearCookies();
    cy.clearLocalStorage();

    //generating random username and navigating to url
    cy.generateRandomUsername();
    sign.navigate(Cypress.env('baseUrl'));

  });

  it('signup', () => {
    
    //click on signup
    const signup = '#signin2'
    sign.clickSignup(signup)

    // perform signup
    const user = '#sign-username'
    const pass = '#sign-password'
    const signupBtn = '//button[normalize-space()="Sign up"]'
    sign.signupModal(user, pass, signupBtn)
    cy.wait(2000)

    // verify signup
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Sign up successful.');
    });

  });

  it('login', () => {

    //click on login
    const log_in = '#login2'
    login.clickLogin(log_in)

    //logging in
    const user = '#loginusername'
    const pass = '#loginpassword'
    const loginBtn = '//button[normalize-space()="Log in"]'
    login.loginModal(user, pass, loginBtn)

    //verifying
    const name = '#nameofuser'
    login.verifyLogin(name)
  })

  it('add to cart', () => {

    cy.wait(2000); // Wait for the login process to complete
    //select laptop
    const lbtn = 'Laptops'
    cart.clickLaptop(lbtn)

    //select product and add to cart
    const prod = '//a[normalize-space()="Sony vaio i5"]'
    const addCart = '//a[normalize-space()="Add to cart"]'
    cart.addToCart(prod, addCart)

    // verifying
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Product added.');
    });

  })
})
