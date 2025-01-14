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
    reporter: "@shelex/cypress-allure-plugin",  // Reporter Allure
    reporterOptions: {
      resultsDir: "allure-results"  // Diretório dos resultados
    }
  },
  env: {
    allure: true  // Definindo a variável de ambiente para Allure
  },
});
