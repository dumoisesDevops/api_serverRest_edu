const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adiciona o Allure Writer para gerar resultados
      allureWriter(on, config);
      return config;
    },
    video: false, // Desativa a gravação de vídeo durante os testes
    baseUrl: 'https://serverest.dev/', // Define a URL base dos testes
    reporter: "junit", // Define o reporter para gerar relatórios em formato JUnit
    reporterOptions: {
      mochaFile: "results/output.xml", // Define o local do arquivo XML de saída
      toConsole: true // Exibe resultados no console
    },
    env: {
      allure: true // Ativa o Allure para gerar os relatórios
    }
  }
});
