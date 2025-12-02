const { defineConfig } = require("cypress");
const lens = require("cypress-lens/plugin");

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      lens(on, config); 
      return config;
    },
  },
});
