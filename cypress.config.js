const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    env: {
      baseUrl: "https://www.demoblaze.com/"
    },
    //experimentalSessionAndOrigin: true,
    testIsolation: false,
  },
});