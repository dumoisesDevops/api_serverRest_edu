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
    reporter: '@shelex/cypress-allure-plugin',  // Usando o Allure como reporter
    reporterOptions: {
      resultsDir: 'allure-results',  // Diretório onde os resultados serão armazenados
    },
  },
  env: {
    allure: true,  // Ativando Allure como variável de ambiente
  },
});
