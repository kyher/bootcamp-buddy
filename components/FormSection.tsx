type props = {
  type: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormSection = ({ type, handleChange }: props) => {
  return (
    <div className="bg-gray-700	 text-white rounded  my-2 p-5">
      <label htmlFor={type}>{type}</label>
      <input
        type="text"
        id={type}
        name={type}
        onChange={handleChange}
        className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default FormSection;
