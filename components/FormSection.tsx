import { Field, Form, Formik } from "formik";
import { DURATION, REP, STRETCH, WARMUP, EXERCISE, VIEW } from "../consts";
import { ActivitySchema } from "../schema";
import FormField from "./FormField";
import Heading from "./Heading";

type props = {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
};

const FormSection = ({ type, setType }: props) => {
  return (
    <div className="w-full">
      <Heading text="Create a new workout" />
      <div className="bg-gray-700	 text-white rounded my-2 p-5">
        <Formik
          initialValues={{
            title: "",
            repOrDuration: "",
            duration: 1,
            reps: 1,
            type: type,
          }}
          onSubmit={(values) => {
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
          {({ errors, touched, values, isSubmitting }) => (
            <Form>
              <FormField
                workoutType={type}
                type="text"
                value={values.title}
                name="title"
              />
              {errors.title && touched.title ? (
                <div className="text-red-400" data-testid="TitleError">
                  {errors.title}
                </div>
              ) : null}
              <div className="my-5">
                <label>Is this activity rep or duration based?</label>
                <br />
                <Field
                  className="m-2"
                  type="radio"
                  value={REP}
                  name="repOrDuration"
                  data-testid="RepRadio"
                />{" "}
                Rep
                <br />
                <Field
                  className="m-2"
                  type="radio"
                  value={DURATION}
                  name="repOrDuration"
                  data-testid="DurationRadio"
                />{" "}
                Duration
              </div>
              {errors.repOrDuration && touched.repOrDuration ? (
                <div className="text-red-400" data-testid="RepOrDurError">
                  {errors.repOrDuration}
                </div>
              ) : null}
              {values.repOrDuration === DURATION && (
                <>
                  <FormField
                    workoutType={type}
                    type="number"
                    value={values.duration}
                    name="duration"
                  />
                  {errors.duration && touched.duration ? (
                    <div className="text-red-400" data-testid="DurationError">
                      {errors.duration}
                    </div>
                  ) : null}
                </>
              )}
              {values.repOrDuration === REP && (
                <>
                  <FormField
                    workoutType={type}
                    type="number"
                    value={values.reps}
                    name="reps"
                  />
                  {errors.reps && touched.reps ? (
                    <div className="text-red-400" data-testid="RepsError">
                      {errors.reps}
                    </div>
                  ) : null}
                </>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                data-testid="SubmitButton"
              >
                {type === STRETCH ? "Submit & View Workout" : "Add & Continue"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormSection;
