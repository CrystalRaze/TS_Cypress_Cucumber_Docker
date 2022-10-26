# Short description

This template inludes the combination of `Cypress` and `Cucumber` test automation frameworks.
It includes several examples of `API` and `E2E` tests.
All the test running results (`.json` files) are located in `./jsonlogs`.
As well, it uses `multiple-cucumber-html-reporter` to generate a specific test-report.
All the additional files such as `screenshots` and `videos` are located in related folders.

# Technologies

This template was created with the following thechnologies:

- Cypress: ^10.10.0
- ESBuild: ^0.15.10
- Cypress-cucumber-preprocessor: ^13.0.2
- Cypress-esbuild-preprocessor: ^2.1.5
- Multiple-cucumber-html-reporter: ^3.0.1

# Installation

## Pre-conditions

**NodeJS** must be installed on your operating system.
Run the following commands to check your versions of packages:

```
node -v (should be ^17.1.0)
```

```
nmp -v (should be ^8.1.2)
```

## IDE Plugins

You should install the following plugins:

- **ESLint**
- **Prettier**

## Install dependencies

```
npm install
```

## Install Cucumber-json-formatter

To format test running results from `.json` to `html` you need to install
one of the following versions of `cucumber-json-formatter`, depending on your OS:

| File versions                                                                                                                                       | Operating System |
| :-------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------- |
| [cucumber-json-formatter-darwin-amd64](https://github.com/cucumber/json-formatter/releases/download/v19.0.0/cucumber-json-formatter-darwin-amd64)   | MacOS            |
| [cucumber-json-formatter-windows-amd64](https://github.com/cucumber/json-formatter/releases/download/v19.0.0/cucumber-json-formatter-windows-amd64) | Windows          |
| [cucumber-json-formatter-linux-amd64](https://github.com/cucumber/json-formatter/releases/download/v19.0.0/cucumber-json-formatter-linux-amd64)     | Linux            |

_Note_: Full list of formatter's versions here - [link](https://github.com/cucumber/json-formatter/releases/tag/v19.0.0)

**Installation steps:**

### MacOS

- Download `cucumber-json-formatter-darwin-amd64` and rename it to `cucumber-json-formatter`
- Move it to a directory that's on your `PATH`
- Make it executable with `chmod +x cucumber-json-formatter`
- Verify that you can run it: `cucumber-json-formatter --help`

At the last step, you may get a security warning from MacOS. If you do, open _System Preferences_. Go to
_Security Settings_. You should see a question asking if you want to open it anyway. Say yes.

### Windows

- Download `cucumber-json-formatter-windows-amd64` and rename it to `cucumber-json-formatter.exe`
- Move it to a directory that's on your `PATH`
- Verify that you can run it: `cucumber-json-formatter --help`

### Linux

- Download `cucumber-json-formatter-linux-amd64` (or one of the other CPU variants) and rename it to `cucumber-json-formatter`
- Move it to a directory that's on your `PATH`
- Make it executable with `chmod +x cucumber-json-formatter`
- Verify that you can run it: `cucumber-json-formatter --help`

# Tests running

- To run your tests in headful mode, run:

```
npm run tests:headful
```

- To run your tests in headless mode, run:

```
npm run tests:headless
```

# Report generation

**Pre-condition**: The results of tests run (`.json` files) can be created only with headless running mode.
So, if you want to generate `html` test-report, make sure that you ran your tests in headless mode before.

- To generate Cucumber test-report, run:

```
npm run generate:Cucumber_report
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
