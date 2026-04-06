const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9cf1ca",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "mochawesome-report",
    overwrite: false,
    reportFilename: "index.html",
    html: true,
    json: false
  },

  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/my-account/",
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
