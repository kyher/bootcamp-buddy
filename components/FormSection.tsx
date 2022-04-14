import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  DURATION,
  MAX_DURATION,
  MAX_REPS,
  MIN_DURATION,
  MIN_REPS,
  REP,
  STRETCH,
  WARMUP,
  EXERCISE,
  VIEW,
} from "../consts";

type props = {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
};

const ActivitySchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  repOrDuration: Yup.string().required("Please select rep or duration"),
  duration: Yup.number()
    .min(parseInt(MIN_DURATION), "Too low")
    .max(parseInt(MAX_DURATION), "Too high")
    .when("repOrDuration", {
      is: "duration",
      then: Yup.number().required("Please enter a duration"),
    }),
  reps: Yup.number()
    .min(parseInt(MIN_REPS), "Too low")
    .max(parseInt(MAX_REPS), "Too high")
    .when("repOrDuration", {
      is: "reps",
      then: Yup.number().required("Please enter reps"),
    }),
});

const FormSection = ({ type, setType }: props) => {
  return (
    <div className="bg-gray-700	 text-white rounded w-full my-2 p-10">
      <h1 className="text-3xl">Create a new workout</h1>
      <Formik
        initialValues={{
          title: "",
          repOrDuration: "",
          duration: 1,
          reps: 1,
          type: type,
        }}
        onSubmit={(values) => {
          console.log(values);
          if (type === WARMUP) {
            localStorage.setItem(type, JSON.stringify(values));
            setType(EXERCISE);
          }
          if (type === EXERCISE) {
            localStorage.setItem(type, JSON.stringify(values));
            setType(STRETCH);
          }
          if (type === STRETCH) {
            localStorage.setItem(type, JSON.stringify(values));
            setType(VIEW);
          }
        }}
        validationSchema={ActivitySchema}
      >
        {({ errors, touched, values, handleChange, isSubmitting }) => (
          <Form>
            <label className="capitalize" htmlFor={type}>
              {type}
            </label>
            <Field
              type="text"
              value={values.title}
              onChange={handleChange}
              name="title"
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.title && touched.title ? (
              <div className="text-red-400">{errors.title}</div>
            ) : null}
            <div className="my-5">
              <label>Is this activity rep or duration based?</label>
              <br />
              <Field
                className="m-2"
                type="radio"
                value={REP}
                name="repOrDuration"
              />{" "}
              Rep
              <br />
              <Field
                className="m-2"
                type="radio"
                value={DURATION}
                name="repOrDuration"
              />{" "}
              Duration
            </div>
            {errors.repOrDuration && touched.repOrDuration ? (
              <div className="text-red-400">{errors.repOrDuration}</div>
            ) : null}
            {values.repOrDuration === DURATION && (
              <>
                <label className="capitalize" htmlFor={type}>
                  {type} Duration
                </label>
                <Field
                  type="number"
                  onChange={handleChange}
                  min={MIN_DURATION}
                  max={MAX_DURATION}
                  value={values.duration}
                  name="duration"
                  className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.duration && touched.duration ? (
                  <div className="text-red-400">{errors.duration}</div>
                ) : null}
              </>
            )}
            {values.repOrDuration === REP && (
              <>
                <label className="capitalize" htmlFor={type}>
                  {type} Reps
                </label>
                <Field
                  type="number"
                  onChange={handleChange}
                  min={MIN_REPS}
                  max={MAX_REPS}
                  value={values.reps}
                  name="reps"
                  className="shadow appearance-none border  rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.reps && touched.reps ? (
                  <div className="text-red-400">{errors.reps}</div>
                ) : null}
              </>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
            >
              {type === STRETCH ? "Submit & View Workout" : "Add & Continue"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSection;
