const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zz5dhd",
  video: true, // ✅ enable video recording
  screenshotOnRunFailure: true, // default true but good to keep
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Test Report"
  },
  e2e: {
    setupNodeEvents(on, config) {

      require("cypress-mochawesome-reporter/plugin")(on);
      
      // detect CI automatically
      if (process.env.CI) {
        config.env.CI = true
      }
      return config
    },
    watchForFileChanges: false,
    env: {
      baseUrl: "https://www.demoblaze.com/"
    },
    //experimentalSessionAndOrigin: true,
    testIsolation: false,
  },
});