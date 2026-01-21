export class LoginPage {
    // Locators
    loginModal = '#login2'
    usernameInput = '#loginusername';
    passwordInput = '#loginpassword';
    loginBtn = 'button:contains("Log in")';
    nameLabel = '#nameofuser';
  
    // Navigate to login page
    navigate(url) {
      cy.visit(url);
    }
    // Open  login form
    openLoginModal() {
        cy.get(this.loginModal).click();
      }
    
    // Fill login form
    login(username, password) {
        cy.get(this.usernameInput).clear().type(username, { delay: 50 }).wait(500);
        cy.get(this.passwordInput).type(password, { delay: 50 });
    }
  
    // Click login button
    clickLoginBtn() {
      cy.get(this.loginBtn).click();
    }
  
    // Verify login success
    verifyLogin(username) {
      cy.get(this.nameLabel)
        .should('be.visible')
        .and('contain.text', username)
        .then(($el) => {
          cy.log('User name displayed: ' + $el.text());
          console.log('User name displayed: ' + $el.text());
        });
    }
  }
  