type props = {
  type: string;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDurationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormSection = ({ type, handleTitleChange, handleDurationChange }: props) => {
  return (
    <div className="bg-gray-700	 text-white rounded  my-2 p-5">
      <label htmlFor={type}>{type}</label>
      <input
        type="text"
        id={type}
        name={type}
        onChange={handleTitleChange}
        className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />
      <label htmlFor={type+'duration'}>{type} Duration</label>
      <input
        type="number" 
        id={type+'duration'}
        name={type+'duration'}
        onChange={handleDurationChange}
        className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default FormSection;
