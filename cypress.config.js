const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // Esto es necesario para que el preprocesador pueda generar informes JSON después de cada ejecución, y más,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Asegúrese de devolver el objeto de configuración, ya que podría haber sido modificado por el complemento.
  return config;
}

module.exports = defineConfig({
  video: true,
  viewportWidth: 1280,
  viewportHeight: 720,
  projectId: "9kyhau",
  reporter: "junit",
  reporterOptions: {
    mochaFile: "reports/my-test-output-[hash].xml",
    toConsole: true,
    attachments: true,
  },
  e2e: {
    setupNodeEvents,
    specPattern: "**/*.{feature,features}",
    // para correr pruebas de diferente sprint solo es cambiar el numero del sprint correspodiente!!,
    baseUrl: "https://sigo-maestros-test.coordinadora.com/",
    chromeWebSecurity: true,
    env: {
      allureReuseAfterSpec: true,
      setupNodeEvents(on, config) {
        require("cypress-mochawesome-reporter/plugin")(on);
      },
    },
  },
});