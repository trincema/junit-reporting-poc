import { defineConfig } from "cypress";
// import registerReportPortalPlugin from "@reportportal/agent-js-cypress/lib/plugin";
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

export default defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: 'http://localhost:8080/api/v1',
    apiKey: 'default_HONZdd1cQe-sGpPyUPwCO0YBgl0e-r49k6WZ91T7aB8f5xDgqP-VZruuo6O8doBR',
    launch: 'Cypress launch',
    project: 'default_personal',
    description: 'Cypress launch',
    autoMerge: true,
    attributes: [
      {
        key: 'attributeKey',
        value: 'attrbiuteValue',
      },
      {
        value: 'anotherAttrbiuteValue',
      },
    ],
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
  }
});
