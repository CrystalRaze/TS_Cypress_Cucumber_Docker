import { Base } from "./base";

class LoginPage extends Base {
  get mainForm() {
    return cy.get(".wrapper");
  }

  get Logo() {
    return cy.get("#logomini");
  }

  get formHeader() {
    return cy.get("h1");
  }

  get usernameInput() {
    return cy.get('input[name="username"]');
  }

  get passwordInput() {
    return cy.get('input[name="password"]');
  }

  get loginButton() {
    return cy.get('input[type="submit"]');
  }

  get usernameError() {
    return cy.get('input[name="username"] ~ span[class="help-block"]');
  }

  get passwordError() {
    return cy.get('input[name="password"] ~ span[class="help-block"]');
  }
}
export const LOGIN_PAGE = new LoginPage();
