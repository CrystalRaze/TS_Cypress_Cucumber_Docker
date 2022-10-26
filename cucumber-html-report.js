const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "./jsonlogs",
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "Chrome",
      version: "106"
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10"
    }
  }
});
