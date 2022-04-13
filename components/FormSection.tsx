import {
  DURATION,
  MAX_DURATION,
  MAX_REPS,
  MIN_DURATION,
  MIN_REPS,
  REP,
  STRETCH,
} from "../consts";

type props = {
  type: string;
  error: string;
  repOrDuration: string;
  handleRepOrDurationChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDurationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRepChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

const FormSection = ({
  type,
  error,
  repOrDuration,
  handleRepOrDurationChange,
  handleTitleChange,
  handleDurationChange,
  handleRepChange,
  handleSubmit,
}: props) => {
  return (
    <div className="bg-gray-700	 text-white rounded w-full my-2 p-10">
      <h1 className="text-3xl">Create a new workout</h1>
      <label className="capitalize" htmlFor={type}>
        {type}
      </label>
      <input
        type="text"
        id={type + "_title"}
        name={type}
        onChange={handleTitleChange}
        className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />
      <div className="my-5" onChange={handleRepOrDurationChange}>
        <label>Is this activity rep or duration based?</label>
        <br />
        <input className="m-2" type="radio" value={REP} name={type} /> Rep
        <br />
        <input className="m-2" type="radio" value={DURATION} name={type} />{" "}
        Duration
      </div>
      {repOrDuration === DURATION && (
        <>
          <label className="capitalize" htmlFor={type}>
            {type} Duration
          </label>
          <input
            type="number"
            id={type + "_duration"}
            min={MIN_DURATION}
            max={MAX_DURATION}
            name={type}
            onChange={handleDurationChange}
            className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </>
      )}
      {repOrDuration === REP && (
        <>
          <label className="capitalize" htmlFor={type}>
            {type} Reps
          </label>
          <input
            type="number"
            id={type + "_reps"}
            min={MIN_REPS}
            max={MAX_REPS}
            name={type}
            onChange={handleRepChange}
            className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </>
      )}

      <button
        onClick={handleSubmit}
        className="shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
      >
        {type === STRETCH ? "Submit & View Workout" : "Add & Continue"}
      </button>
      {error ? <span className="w-full text-red-400">{error}</span> : ""}
    </div>
  );
};

export default FormSection;
