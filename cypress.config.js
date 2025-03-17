const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://example.com",
    "defaultCommandTimeout": 5000,
    "fixturesFolder": "cypress/fixtures",
    "specPattern": "**/*.cy.{js,jsx,ts,tsx}",
    "screenshotsFolder": "cypress/screenshots",
    "videosFolder": "cypress/videos"
  },
});
