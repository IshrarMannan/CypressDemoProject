import { LoginPage } from "../../Pages/loginPage";
import { LogoutPage } from "../../Pages/logoutPage";

const logout = new LogoutPage(); 
const login = new LoginPage();

describe('Demoblaze Login Test (POM)', () => {
  let username, password;

  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    // Read previously stored user data from signup fixture
    cy.readFile('cypress/fixtures/userData.json').then((user) => {
      username = user.username;
      password = user.password;
    });

    login.navigate(Cypress.env('baseUrl'));
  });

  it('should login successfully', () => {
    login.openLoginModal();
    login.login(username, password);
    login.clickLoginBtn();
    login.verifyLogin(username);
  });
  after(() => {
    logout.clickLogout(); // click logout and verify
  });
});
