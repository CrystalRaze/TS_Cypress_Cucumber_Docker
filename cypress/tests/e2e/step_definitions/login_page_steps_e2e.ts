import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { loginWithCredentials } from "../../../models/login_page/on_login_page";
import {
  logoIsDisplayed,
  userNameIsRequired,
  passwordIsRequired,
  mainFormIsDisplayed,
  credentialsAreRequired,
  placeholdersAreValid,
  loginButtonIsDisplayed
} from "../../../models/login_page/verify_on_login_page";

const { BASE_URL, AUTH_USERNAME, AUTH_PASSWORD } = Cypress.env();

Given("A user navigates to the 'Login' page", () => {
  cy.visit(BASE_URL);
});

When("A a user clicks on the 'Login' button with empty inputs", () => {
  loginWithCredentials({
    username: "{backspace}",
    password: "{backspace}"
  });
});

When("A user enters only the username {string} and clicks on the 'Login' button", (username: string) => {
  loginWithCredentials({ username: username });
});

When("A user enters only the password {string} and clicks on the 'Login' button", (password: string) => {
  loginWithCredentials({ password: password });
});

When("A user enters invalid credentials and clicks on the 'Login' button", (table: DataTable) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginWithCredentials({
      username: row.username,
      password: row.password
    });
  });
});

When("A user enters valid credentials and clicks on the 'Login' button", () => {
  loginWithCredentials({
    username: AUTH_USERNAME,
    password: AUTH_PASSWORD
  });
});

Then("A user will see all the required page's elements", () => {
  logoIsDisplayed();
  mainFormIsDisplayed();
  placeholdersAreValid();
  loginButtonIsDisplayed();
});

Then("A user will see errors on both inputs", () => {
  credentialsAreRequired();
});

Then("A user will see only the {string} error message under the 'Password input'", (errorMessage: string) => {
  passwordIsRequired(errorMessage);
});

Then("A user will see only the {string} error message under the 'Username input'", (errorMessage: string) => {
  userNameIsRequired(errorMessage);
});

Then("A user will see the {string} error message", (errorMessage: string) => {
  userNameIsRequired(errorMessage);
});

// This test should fail
Then("A user will be redirected to the 'Dashboard' page", () => {
  cy.url().should("include", "/dashboard");
});
