const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com', // API simulada para la tarea
    setupNodeEvents(on, config) {
      // Implementación de listeners para reportes de QA
    },
    specPattern: 'cypress/**/*.{cy.js,spec.js}',
    supportFile: false // Desactivado para simplificar la estructura del ejercicio
  },
});