/// <reference types="cypress" />

describe("Check that the app displays", () => {
  it("displays the three menu options on the home page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h2").should("have.length", 3);
    cy.get("h2").contains("Create workout ");
    cy.get("h2").contains("View workout ");
    cy.get("h2").contains("About");
  });
});
