const { defineConfig } = require("cypress");
const lens = require("cypress-lens/plugin");

module.exports = defineConfig({
  video: false,
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/my-account/",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    setupNodeEvents(on, config) {
      lens(on, config); 
      return config;
    },
  },
});
