const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    video: false,
    baseUrl: 'https://serverest.dev/',  
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/output-[hash].xml',
    toConsole: false
  },
  env: {
    allure: true
  },
});