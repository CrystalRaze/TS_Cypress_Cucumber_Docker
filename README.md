# Short description

This template inludes the combination of `Cypress` and `Cucumber` test automation frameworks,
and `Docker` for tests runs. It includes several examples of `API` and `E2E` tests.
As well, it uses `multiple-cucumber-html-reporter` to generate a specific test-report.

# Technologies

This template was created with the following thechnologies:

- Cypress: ^10.10.0
- Cypress-cucumber-preprocessor: ^13.0.2
- Cypress-esbuild-preprocessor: ^2.1.5
- Multiple-cucumber-html-reporter: ^3.0.1
- Docker ^20.10.20

# Installation

## Pre-conditions

1. **NodeJS**. It must be installed on your operating system.
   Run the following commands to check your versions of packages:

```
node -v (should be ^17.1.0)
```

```
nmp -v (should be ^8.1.2)
```

2. **Docker**. It is used for the creation of images and containers for test runs.
   You can donwload the `Docker` using this [link](https://www.docker.com).
   Run the following command to check you Docker's version:

```
docker -v (should be ^20.10.20)
```

## IDE Plugins

You should install the following plugins:

- **ESLint**
- **Prettier**

## Install dependencies

```
npm install
```

# Tests running

Before you start running scripts, make sure that you created `cypress.env.json` file with required data.

- To build a new Docker image run:

```
npm run docker:build_image
```

- To run your tests for the first time, run:

```
npm run docker:tests_run
```

- To repeat tests running, run:

```
npm run docker:repeat_tests_run
```

**P.S:** If you want to run tests examples from this repository, just copy the data from `cypress.env.example.json`
and paste it into the `cypress.env.json` file.

# Report generation

Test report will be generated automatically after the tests run, but it is accessable only in `Docker` container. To extract it, run the following command:

```
npm run docker:get_report
```

# Afterwords

## About Cypress

- JavaScript End to End Testing Framework.
- Cypress has been made specifically for developers and QA engineers, to help them get more done.
- Cypress benefits from our amazing open source community - and our tools are evolving better and faster than if we worked on them alone.
- Cypress takes snapshots as your tests run. Simply hover over commands in the Command Log to see exactly what happened at each step.
- Debug directly from familiar tools like Chrome DevTools. Our readable errors and stack traces make debugging lightning fast.
- Cypress automatically reloads whenever you make changes to your tests.
- Cypress automatically waits for commands and assertions before moving on. No more async hell.

## Directory structure

- **constants** - save constants there (example inside).
- **fixtures** - contains test data.
- **interfaces** - contains interfaces for `e2e`, as well as for `api` tests.
- **tests** - contains integration test files (api/e2e). Every `feature` file has a related name to the `.ts` file from the `step_definitions` folder.
- **models** - takes the selectors from the page object and uses them to create functions(preferred) or methods such as login, create something new, edit something, delete something etc.
- **page-objects** folder - contains the page selectors.
- **reports** - you won't have this folder from the box, but you will. There will store reports after runs.
  - Use `npm run test:LoginPage_headless` and then `generate:Cucumber_report` to generate reports.
- If screenshots were taken via the cy.screenshot() command or automatically when a test fails, the screenshots are stored in the screenshotsFolder which is set to **cypress/screenshots** by default.
- **support** folder includes:
  - `commands.js` - allows to create custom commands and overwriting existing commands.
    chainable.
  - `index.js` - allows to put reusable behavior such as custom commands or global overrides that you want applied and available to all of your spec files.
- `cypress.env.example.json` - this is an example of how could be `cypress.env.json` file. We don't share credentials through git because of privacy policy. Therefore create `cypress.env.json` in root and add all what you need bypass.
- `cypress.config.js` - the first time you open Cypress Test Runner, it creates the `cypress.config.js` configuration file. This file is used to store any configuration values you supply.
- `.cypress-cucumber-preprocessor` - the configuration file, which is responsible for `feature` files execution, and logging the results of tests running, in `.json` format.
- `cucumber-html-report.js` - you can set a specific settings of your test-report, such as
  `reportPath`, `browser`, or `platform` by changing the `cucumber-html-report.js` file.
  You can find more information about report config here - [link](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
- `tsconfig.json` - this file is used for TypeScript configuration in our project.
- `Dockerfile` - it allows us to create specific images of our project and different containers.
- `rm_docker_reports.js` - this script is used to delete old reports before you get a new one.
