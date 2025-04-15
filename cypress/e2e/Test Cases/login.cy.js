import { loginPage } from "../../Pages/loginPage"
import { signupPage } from "../../Pages/signupPage"

const login = new loginPage()
const sign = new signupPage()

describe('Demoblaze Test', () => {
  before('Random user', () => {

    //manually clearing before running at first
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.generateRandomUsername();
    sign.navigate(Cypress.env('baseUrl'));

  });
  it('signup', () => {

    const signup = '#signin2'
    sign.clickSignup(signup)

    const user = '#sign-username'
    const pass = '#sign-password'
    const signupBtn = '//button[normalize-space()="Sign up"]'
    sign.signupModal(user, pass, signupBtn)
    cy.wait(2000)
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Sign up successful.');
    });

  })
  it('login', () => {

    const log_in = '#login2'
    login.clickLogin(log_in)

    const user = '#loginusername'
    const pass = '#loginpassword'
    const loginBtn = '//button[normalize-space()="Log in"]'
    login.loginModal(user, pass, loginBtn)

    const name = '#nameofuser'
    login.verifyLogin(name)

  })

})