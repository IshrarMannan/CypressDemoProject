const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9ohasi',
  video: true, // ✅ enable video recording
  screenshotOnRunFailure: true, // default true but good to keep
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
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