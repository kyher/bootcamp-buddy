import { STRETCH } from "../consts";

type props = {
  type: string;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDurationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

const FormSection = ({ type, handleTitleChange, handleDurationChange, handleSubmit }: props) => {
  return (
    <div className="bg-gray-700	 text-white rounded  my-2 p-5">
      <h1 className="text-3xl">Create a new workout</h1>
      <label className='capitalize' htmlFor={type}>{type}</label>
      <input
        type="text"
        id={type+'_title'}
        name={type}
        onChange={handleTitleChange}
        className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />
      <label className='capitalize' htmlFor={type}>{type} Duration</label>
      <input
        type="number" 
        id={type+'_duration'}
        name={type}
        onChange={handleDurationChange}
        className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />
              <button
          onClick={handleSubmit}
          className="shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
        >
          {type === STRETCH ? "Submit & View Workout" : "Add & Continue"}
        </button>
    </div>
  );
};

export default FormSection;
