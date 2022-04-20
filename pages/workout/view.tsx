import type { NextPage } from "next";
import Head from "next/head";
import { BackButton, ViewSection } from "../../components";

const View: NextPage = () => {
  return (
    <div className="grid place-items-center">
      <Head>
        <title>Your workouts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackButton />
      <ViewSection />
    </div>
  );
};

export default View;
