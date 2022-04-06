import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { BackButton, FormSection } from "../../components";
import { ViewSection } from "../../components";
import { Activity } from "../../types";
import { WARMUP, EXERCISE, STRETCH } from "../../consts";

const Create: NextPage = () => {
  const [activities, setActivities] = useState<Array<Activity>>([]);
  const [warmup, setWarmup] = useState<Activity>({
    title: "",
    duration: 0,
    type: "",
  });
  const [exercise, setExercise] = useState<Activity>({
    title: "",
    duration: 0,
    type: "",
  });
  const [stretches, setStretches] = useState<Activity>({
    title: "",
    duration: 0,
    type: "",
  });

  const handleWarmupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWarmup({ title: event.target.value, duration: 50, type: WARMUP });
  };

  const handleExerciseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExercise({ title: event.target.value, duration: 50, type: EXERCISE });
  };
  const handleStretchesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStretches({ title: event.target.value, duration: 50, type: STRETCH });
  };

  const handleSubmit = () => {
    setActivities([warmup, exercise, stretches]);
  };

  return (
    <div className="grid place-items-center h-screen ">
      <Head>
        <title>Create your workout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackButton />
      <h1 className="text-3xl">Create a new workout</h1>
      <div>
        <FormSection type="Warmup" handleChange={handleWarmupChange} />
        <FormSection type="Exercises" handleChange={handleExerciseChange} />
        <FormSection type="Stretches" handleChange={handleStretchesChange} />
        <button
          onClick={handleSubmit}
          className="shadow bg-gray-700	 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
        >
          Add
        </button>
      </div>
      <h2 className="text-2xl">View your planned workout below:</h2>
      <div>
        <ViewSection activities={activities} />
      </div>
    </div>
  );
};

export default Create;
