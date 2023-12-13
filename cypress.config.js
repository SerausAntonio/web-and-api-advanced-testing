const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://reqres.in/",
    specPattern: "cypress/API-Testing/**/*.cy.{js,jsx,ts,tsx}"
  },
});
