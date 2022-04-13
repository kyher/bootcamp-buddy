import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { BackButton, FormSection } from "../../components";
import { ViewSection } from "../../components";
import { Activity } from "../../types";
import {
  WARMUP,
  EXERCISE,
  STRETCH,
  VIEW,
  REP,
  DURATION,
  MIN_REPS,
  MAX_REPS,
  MIN_DURATION,
  MAX_DURATION,
} from "../../consts";

const Create: NextPage = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const [warmups, setWarmups] = useState<Activity>({
    title: "",
    type: "",
    repOrDuration: "",
  });

  const [exercises, setExercises] = useState<Activity>({
    title: "",
    type: "",
    repOrDuration: "",
  });

  const [stretches, setStretches] = useState<Activity>({
    title: "",
    type: "",
    repOrDuration: "",
  });

  const [currentStep, setcurrentStep] = useState(WARMUP);

  const [error, setError] = useState("");

  const [repOrDuration, setRepOrDuration] = useState("");

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === WARMUP) {
      setWarmups({ ...warmups, title: value });
    }
    if (name === EXERCISE) {
      setExercises({ ...exercises, title: value });
    }
    if (name === STRETCH) {
      setStretches({ ...stretches, title: value });
    }
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = parseInt(event.target.value);
    if (name === WARMUP) {
      setWarmups({ ...warmups, duration: value });
    }
    if (name === EXERCISE) {
      setExercises({ ...exercises, duration: value });
    }
    if (name === STRETCH) {
      setStretches({ ...stretches, duration: value });
    }
  };

  const handleRepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = parseInt(event.target.value);
    if (name === WARMUP) {
      setWarmups({ ...warmups, reps: value });
    }
    if (name === EXERCISE) {
      setExercises({ ...exercises, reps: value });
    }
    if (name === STRETCH) {
      setStretches({ ...stretches, reps: value });
    }
  };

  const handleRepOrDurationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setRepOrDuration(value);
    if (name === WARMUP) {
      setWarmups({ ...warmups, repOrDuration: value });
    }
    if (name === EXERCISE) {
      setExercises({ ...exercises, repOrDuration: value });
    }
    if (name === STRETCH) {
      setStretches({ ...stretches, repOrDuration: value });
    }
    setError("");
  };

  const validate = (type: Activity) => {
    let valid = true;
    if (!type.title) {
      setError("Please add a title.");
      valid = false;
    }

    if (!type.repOrDuration) {
      setError("Please select rep or duration based.");
      valid = false;
    }

    if (type.repOrDuration === REP) {
      if (!type.reps) {
        setError("Please enter reps amount.");
        valid = false;
      }
      if (type.reps && type.reps < parseInt(MIN_REPS)) {
        setError(`Please enter at least ${MIN_REPS} reps.`);
        valid = false;
      }
      if (type.reps && type.reps > parseInt(MAX_REPS)) {
        setError(`Please enter less than ${MAX_REPS} reps.`);
        valid = false;
      }
    }

    if (type.repOrDuration === DURATION) {
      if (!type.duration) {
        setError("Please enter a duration");
        valid = false;
      }
      if (type.duration && type.duration < parseInt(MIN_DURATION)) {
        setError(
          `Please enter a duration of at least ${MIN_DURATION} minutes.`
        );
        valid = false;
      }
      if (type.duration && type.duration > parseInt(MAX_DURATION)) {
        setError(`Please enter a duration under ${MAX_DURATION} minutes.`);
        valid = false;
      }
    }

    return valid;
  };

  const handleSubmit = () => {
    if (currentStep === WARMUP) {
      const valid = validate(warmups);
      if (valid) {
        setcurrentStep(EXERCISE);
        setRepOrDuration("");
        setError("");
      }
    }
    if (currentStep === EXERCISE) {
      const valid = validate(exercises);
      if (valid) {
        setcurrentStep(STRETCH);
        setRepOrDuration("");
        setError("");
      }
    }
    if (currentStep === STRETCH) {
      const valid = validate(stretches);
      if (valid) {
        setActivities([
          { ...warmups, type: WARMUP },
          { ...exercises, type: EXERCISE },
          { ...stretches, type: STRETCH },
        ]);
        localStorage.setItem("activities", JSON.stringify(activities));
        setcurrentStep(VIEW);
        setError("");
      }
    }
  };

  return (
    <div className="grid place-items-center">
      <Head>
        <title>Create your workout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackButton />
      <div className="w-1/2">
        {currentStep === WARMUP && (
          <FormSection
            type={WARMUP}
            error={error}
            repOrDuration={repOrDuration}
            handleRepOrDurationChange={handleRepOrDurationChange}
            handleTitleChange={handleTitleChange}
            handleDurationChange={handleDurationChange}
            handleRepChange={handleRepChange}
            handleSubmit={handleSubmit}
          />
        )}
        {currentStep === EXERCISE && (
          <FormSection
            type={EXERCISE}
            error={error}
            repOrDuration={repOrDuration}
            handleRepOrDurationChange={handleRepOrDurationChange}
            handleTitleChange={handleTitleChange}
            handleDurationChange={handleDurationChange}
            handleRepChange={handleRepChange}
            handleSubmit={handleSubmit}
          />
        )}
        {currentStep === STRETCH && (
          <FormSection
            type={STRETCH}
            error={error}
            repOrDuration={repOrDuration}
            handleRepOrDurationChange={handleRepOrDurationChange}
            handleTitleChange={handleTitleChange}
            handleDurationChange={handleDurationChange}
            handleRepChange={handleRepChange}
            handleSubmit={handleSubmit}
          />
        )}
        {currentStep === VIEW && <ViewSection activities={activities} />}
      </div>
    </div>
  );
};

export default Create;
