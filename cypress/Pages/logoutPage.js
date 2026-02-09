export class LogoutPage {
    // Locators
    logoutButton = '#logout2'; // Demoblaze logout button
    loginButton = '#login2';   // Used to verify logout success

    // Click the logout button
    clickLogout() {
        cy.get(this.logoutButton)
          .should('be.visible')
          .click();
    }

    // Verify user is logged out
    verifyLogout() {
        cy.get(this.loginButton)
          .should('be.visible')
          .and('contain.text', 'Log in');
    }

}
