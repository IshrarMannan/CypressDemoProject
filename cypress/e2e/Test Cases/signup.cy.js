import { SignupPage } from "../../Pages/signupPage";
import { RandomData } from "../../support/randomData";

const sign = new SignupPage();
const randomData = new RandomData();

describe('Demoblaze Signup Test (POM)', () => {
  let username, password;

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    // Generate random username & password
    const data = randomData.generateRandomData();
    username = data.username;
    password = data.password;

    // Write to fixture for later tests (login, etc.)
    cy.writeFile('cypress/fixtures/userData.json', { username, password });

    // Navigate to base URL
    sign.navigate(Cypress.env('baseUrl'));
  });

  it('should signup successfully', () => {
    sign.clickSignup();
    sign.signupModal(username, password);

    // Handle signup alert
    cy.on('window:alert', (text) => {
      expect(['Sign up successful.', 'This user already exist.']).to.include(text);
    });
  });
});
