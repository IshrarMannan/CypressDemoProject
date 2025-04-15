// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/index.js or support.js
// cypress/support/index.js or support.js
import { faker } from '@faker-js/faker';

// Add custom command to generate a dynamic username
Cypress.Commands.add('generateRandomUsername', () => {
  const randomUsername = faker.internet.userName(); // Generates a random username
  Cypress.env('username', randomUsername); // Save the username to environment variable
});
import 'cypress-xpath'

