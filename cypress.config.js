const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adiciona o Allure Writer para gerar resultados
      allureWriter(on, config);
      return config;
    },
    video: false,
    baseUrl: 'https://serverest.dev/',
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Cypress Allure Report",
      embeddedScreenshots: true,
      inlineAssets: true
    },
    env: {
      allure: true
    }
  }
});

