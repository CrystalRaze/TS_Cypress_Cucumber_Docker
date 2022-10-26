const { BASE_URL } = Cypress.env();

export class Base {
  navigateTo(path: string) {
    return cy.visit(BASE_URL + path);
  }
}

export const BASE = new Base();
