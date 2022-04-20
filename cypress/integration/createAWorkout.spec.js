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
  ActivityCard,
} from "../fixtures/testIds.json";
import {
  createWorkoutHeading,
  viewWorkoutHeading,
} from "../fixtures/headings.json";
import {
  WarmupTitle,
  WarmupReps,
  ExerciseTitle,
  ExerciseDuration,
  StretchTitle,
  StretchDuration,
} from "../fixtures/testData.json";

describe("Check the workout creation functionality", () => {
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
    cy.get(TitleInput).type(WarmupTitle);
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
    cy.get(RepsInput).type(WarmupReps);
    cy.get(SubmitButton).click();
    cy.get(TitleLabel).contains("exercise");
  });
  it("submits a valid exercise with valid data", () => {
    cy.get(TitleInput).type(ExerciseTitle);
    cy.get(DurationRadio).click();
    cy.get(DurationInput).clear();
    cy.get(DurationInput).type(ExerciseDuration);
    cy.get(SubmitButton).click();
    cy.get(TitleLabel).contains("stretch");
  });
  it("submits a valid stretch with valid data", () => {
    cy.get(TitleInput).type(StretchTitle);
    cy.get(DurationRadio).click();
    cy.get(DurationInput).clear();
    cy.get(DurationInput).type(StretchDuration);
    cy.get(SubmitButton).contains("Submit & View Workout");
    cy.get(SubmitButton).click();
  });
  it("displays the view page", () => {
    cy.get(BackButton).contains(backButtonLinkText);
    cy.get("h1").contains(viewWorkoutHeading);
    cy.get("h3").contains("WARMUP");
    cy.get("h3").contains("EXERCISE");
    cy.get("h3").contains("STRETCH");
    cy.get(ActivityCard).contains(WarmupTitle + " for " + WarmupReps);
    cy.get(ActivityCard).contains(ExerciseTitle + " for " + ExerciseDuration);
    cy.get(ActivityCard).contains(StretchTitle + " for " + StretchDuration);
  });
});
