export class SignupPage {
    // Locators
    signupBtn = '#signin2';
    usernameInput = '#sign-username';
    passwordInput = '#sign-password';
    signupSubmitBtn = '//button[normalize-space()="Sign up"]';
  
    // Navigate to URL
    navigate(url) {
      cy.visit(url);
    }
  
    // Click Signup button to open modal
    clickSignup() {
      cy.get(this.signupBtn).click();
    }
  
    // Fill Signup modal
    signupModal(username, password) {
      cy.get(this.usernameInput).clear().type(username, { delay: 50 }).wait(500);
      cy.get(this.passwordInput).type(password, { delay: 50 });
      cy.xpath(this.signupSubmitBtn).click();
    }
  }
  