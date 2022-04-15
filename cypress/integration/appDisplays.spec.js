/// <reference types="cypress" />
import { links } from "../fixtures/links.json";

describe("Check that the app displays", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("displays the three menu options on the home page", () => {
    cy.get('[data-testid="HomeLink"]').should("have.length", 3);
    cy.get('[data-testid="HomeLink"]').contains(links.createWorkoutLinkText);
    cy.get('[data-testid="HomeLink"]').contains(links.viewWorkoutLinkText);
    cy.get('[data-testid="HomeLink"]').contains(links.aboutLinkText);
  });
  it("displays the about page", () => {
    cy.get("h2").contains(links.aboutLinkText).click();
    cy.get('[data-testid="BackButton"]').contains(links.backButtonLinkText);
    cy.get("h1").contains("About Bootcamp Buddy");
    cy.get("p").contains(
      "A site to aid the creation of bootcamp workouts. Made using NextJS."
    );
  });
  it("displays the view page", () => {
    cy.clearLocalStorage();
    cy.get("h2").contains(links.viewWorkoutLinkText).click();
    cy.get('[data-testid="BackButton"]').contains(links.backButtonLinkText);
    cy.get("h1").contains("View your planned workout below");
    cy.get("h3").contains("WARMUP");
    cy.get("h3").contains("EXERCISE");
    cy.get("h3").contains("STRETCH");
    cy.get("div").contains("No activity set.");
  });
  it("displays the create page", () => {
    cy.get("h2").contains(links.createWorkoutLinkText).click();
    cy.get('[data-testid="BackButton"]').contains(links.backButtonLinkText);
    cy.get("h1").contains("Create a new workout");
  });
});
