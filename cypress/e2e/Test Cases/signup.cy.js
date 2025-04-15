import { signupPage } from "../../Pages/signupPage"

const sign = new signupPage()

describe('Demoblaze Test', () => {

  beforeEach('Demoblaze URL', () => {

    //manually clearing before running at first
    cy.clearCookies();
    cy.clearLocalStorage();

    //generating random user name and navigating to the base url
    cy.generateRandomUsername();
    sign.navigate(Cypress.env('baseUrl'));

  });

  it('signup', () => {

    //click on signup
    const signup = '#signin2'
    sign.clickSignup(signup)

    //signing up
    const user = '#sign-username'
    const pass = '#sign-password'
    const signupBtn = '//button[normalize-space()="Sign up"]'
    sign.signupModal(user, pass, signupBtn)

    //verifying
    cy.on('window:alert', (alertText) => {
      cy.log('Alert message: ' + alertText);  // This prints the alert message in the Cypress command log
      console.log('Alert message: ' + alertText);  // This prints it to the browser console
      expect(alertText).to.equal('Sign up successful.');
    });

  })

})