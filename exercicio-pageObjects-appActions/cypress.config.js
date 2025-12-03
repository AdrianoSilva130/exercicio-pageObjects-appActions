
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: "./cypress/snapshots/actual",
  trashAssetsBeforeRuns: true,
  video: false,

  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/my-account/",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
     
      return config;
    },
  },
});
