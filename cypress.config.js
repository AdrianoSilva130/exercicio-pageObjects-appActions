const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "mochawesome-report",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/my-account/",
    setupNodeEvents(on, config) {

    }
  }
});
