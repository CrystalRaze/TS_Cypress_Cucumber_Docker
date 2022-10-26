import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
const { BASE_URL, AUTH_USERNAME, AUTH_PASSWORD } = Cypress.env();

let pageResponse;

When("A user sends a GET request to the 'Login' page", () => {
  cy.request({
    method: "GET",
    url: BASE_URL
  }).then((response) => {
    pageResponse = response;
  });
});

When("A user sends a POST request to the 'Login' page with valid credentials", () => {
  cy.request({
    method: "POST",
    url: BASE_URL,
    body: {
      username: AUTH_USERNAME,
      password: AUTH_PASSWORD
    }
  }).then((response) => {
    pageResponse = response;
  });
});

When("A user sends a {string} request to the {string} end-point", (method: string, url: string) => {
  cy.request({
    method: method,
    url: url,
    failOnStatusCode: false
  }).then((response) => {
    pageResponse = response;
  });
});

Then("A user recieves a responce with code status {int}", (status: number) => {
  expect(pageResponse.status).to.eq(status);
});

Then("A user recieves a responce with {string} content-type", (contentType: string) => {
  expect(pageResponse.headers["content-type"]).to.include(contentType);
});
