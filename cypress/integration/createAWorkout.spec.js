/// <reference types="cypress" />
import {
  createWorkoutLinkText,
  backButtonLinkText,
} from "../fixtures/links.json";
import {
  HomeLink,
  BackButton,
  TitleInput,
  TitleLabel,
  RepOrDurationError,
  TitleError,
  SubmitButton,
  RepRadio,
  DurationRadio,
  DurationLabel,
  RepsLabel,
  RepsInput,
  DurationInput,
  DurationError,
  RepsError,
} from "../fixtures/testIds.json";
import { createWorkoutHeading } from "../fixtures/headings.json";

describe("Check the workout creation functionality", () => {
  it("displays the create option and it is clickable", () => {
    cy.visit("http://localhost:3000/");
    cy.get(HomeLink).contains(createWorkoutLinkText).click();
  });
  it("displays the create page", () => {
    cy.get("h2").contains(createWorkoutLinkText);
    cy.get(BackButton).contains(backButtonLinkText);
    cy.get("h1").contains(createWorkoutHeading);
    cy.get(TitleLabel).contains("warmup");
  });
  it("shows a validation error if you omit an activity title and rep/duration answer", () => {
    cy.get(SubmitButton).click();
    cy.get(TitleError).contains("Required");
    cy.get(RepOrDurationError).contains("Please select rep or duration");
  });
  it("shows a validation error if you omit rep/duration answer only", () => {
    cy.get(TitleInput).type("Test Title");
    cy.get(SubmitButton).click();
    cy.get(TitleError).should("not.exist");
    cy.get(RepOrDurationError).contains("Please select rep or duration");
  });
  it("shows a validation error if you omit title but answer rep or duration", () => {
    cy.get(TitleInput).clear();
    cy.get(RepRadio).click();
    cy.get(SubmitButton).click();
    cy.get(RepOrDurationError).should("not.exist");
    cy.get(TitleError).contains("Required");
  });
  it("change between rep and duration", () => {
    cy.get(TitleInput).type("Test Title");
    cy.get(RepRadio).click();
    cy.get(RepsLabel).should("exist");
    cy.get(DurationRadio).click();
    cy.get(DurationLabel).should("exist");
  });
  it("shows a validation error when inputting too high of a duration", () => {
    cy.get(DurationInput).clear();
    cy.get(DurationInput).type(300);
    cy.get(SubmitButton).click();
    cy.get(DurationError).contains("Too high");
  });
  it("shows a validation error when inputting too low of a duration", () => {
    cy.get(DurationInput).clear();
    cy.get(DurationInput).type(-1111);
    cy.get(SubmitButton).click();
    cy.get(DurationError).contains("Too low");
  });
  it("shows a validation error when inputting too many reps", () => {
    cy.get(RepRadio).click();
    cy.get(RepsLabel).should("exist");
    cy.get(RepsInput).clear();
    cy.get(RepsInput).type(300);
    cy.get(SubmitButton).click();
    cy.get(RepsError).contains("Too high");
  });
  it("shows a validation error when inputting too few reps", () => {
    cy.get(RepsInput).clear();
    cy.get(RepsInput).type(-1111);
    cy.get(SubmitButton).click();
    cy.get(RepsError).contains("Too low");
  });
  it("submits a valid warmup with valid data", () => {
    cy.get(RepsInput).clear();
    cy.get(RepsInput).type(5);
    cy.get(SubmitButton).click();
    cy.get(TitleLabel).contains("exercise");
  });
});
