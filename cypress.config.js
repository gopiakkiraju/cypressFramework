const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    video: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
});
