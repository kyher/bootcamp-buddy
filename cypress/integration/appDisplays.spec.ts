/// <reference types="cypress" />
import {
  createWorkoutLinkText,
  viewWorkoutLinkText,
  aboutLinkText,
  backButtonLinkText,
} from "../fixtures/links.json";
import { HomeLink, BackButton } from "../fixtures/testIds.json";
import {
  aboutHeading,
  viewWorkoutHeading,
  createWorkoutHeading,
} from "../fixtures/headings.json";

describe("Check that the app displays", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("displays the three menu options on the home page", () => {
    cy.get(HomeLink).should("have.length", 3);
    cy.get(HomeLink).contains(createWorkoutLinkText);
    cy.get(HomeLink).contains(viewWorkoutLinkText);
    cy.get(HomeLink).contains(aboutLinkText);
  });
  it("displays the about page", () => {
    cy.get("h2").contains(aboutLinkText).click();
    cy.get(BackButton).contains(backButtonLinkText);
    cy.get("h1").contains(aboutHeading);
    cy.get("p").contains(
      "A site to aid the creation of bootcamp workouts. Made using NextJS."
    );
  });
  it("displays the view page", () => {
    cy.clearLocalStorage();
    cy.get("h2").contains(viewWorkoutLinkText).click();
    cy.get(BackButton).contains(backButtonLinkText);
    cy.get("h1").contains(viewWorkoutHeading);
    cy.get("h3").contains("WARMUP");
    cy.get("h3").contains("EXERCISE");
    cy.get("h3").contains("STRETCH");
    cy.get("div").contains("No activity set.");
  });
  it("displays the create page", () => {
    cy.get("h2").contains(createWorkoutLinkText).click();
    cy.get(BackButton).contains(backButtonLinkText);
    cy.get("h1").contains(createWorkoutHeading);
  });
});
