// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
require('cypress-xpath'); // Adds XPath support
afterEach(() => {
    const test = Cypress.currentTest
  
    if (test) {
      const testTitle = test.title
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "_")
  
      cy.screenshot(`IT-${testTitle}`)
    }
  })