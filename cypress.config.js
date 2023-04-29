const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  chromeWebSecurity: false,
  screenshotOnRunFailure: false,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
    },
  },
});
