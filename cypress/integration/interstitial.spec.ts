import {
  createWorkoutLinkText,
  backButtonLinkText,
} from "../fixtures/links.json";
import {
  HomeLink,
  BackButton,
  InterstitialCreate,
  InterstitialView,
  InterstitialText,
} from "../fixtures/testIds.json";

import "cypress-localstorage-commands";

describe("Check the interstitial page shows when a workout is present", () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });
  it("displays the create option and it is clickable", () => {
    cy.visit("http://localhost:3000/");
    cy.get(HomeLink).contains(createWorkoutLinkText).click();
  });
  it("displays the interstitial page with local storage data present", () => {
    cy.get(BackButton).contains(backButtonLinkText);
    cy.get(InterstitialCreate).contains("Out with the old, in with the new!");
    cy.get(InterstitialView).contains("No thanks! Take me to my workout!");
    cy.get(InterstitialText).contains(
      "It looks like you have a workout already saved. Would you like to discard this and create a new one?"
    );
  });
});
