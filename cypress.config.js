const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w7n65n',
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
