import { Field } from "formik";

type props = {
  type: string;
  workoutType: string;
  value: string | number;
  name: string;
};

const FormField = ({ type, workoutType, value, name }: props) => {
  return (
    <>
      <label
        className="capitalize"
        htmlFor={name + "Input"}
        data-testid={name + "Label"}
      >
        {workoutType}
      </label>
      <Field
        type={type}
        id={name + "Input"}
        value={value}
        name={name}
        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        data-testid={name + "Input"}
      />
    </>
  );
};

export default FormField;
