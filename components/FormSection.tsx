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
            addAnother: false,
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm();

            const typeInStorage = localStorage.getItem(type);
            if (typeInStorage) {
              const oldData = JSON.parse(typeInStorage);
              const newData = [...oldData, values];
              localStorage.setItem(type, JSON.stringify(newData));
            } else {
              localStorage.setItem(type, JSON.stringify([values]));
            }

            if (!values.addAnother) {
              if (type === WARMUP) {
                setType(EXERCISE);
              }
              if (type === EXERCISE) {
                setType(STRETCH);
              }
              if (type === STRETCH) {
                setType(VIEW);
              }
            }
          }}
          validationSchema={ActivitySchema}
        >
          {({ errors, touched, values, isSubmitting }) => (
            <Form>
              <FormField
                workoutType={type}
                fieldType="text"
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
                  id={REP}
                  name="repOrDuration"
                  data-testid="RepRadio"
                />{" "}
                <label htmlFor={REP}>Rep</label>
                <br />
                <Field
                  className="m-2"
                  type="radio"
                  value={DURATION}
                  id={DURATION}
                  name="repOrDuration"
                  data-testid="DurationRadio"
                />{" "}
                <label htmlFor={DURATION}>Duration</label>
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
                    fieldType="number"
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
                    fieldType="number"
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
              <div>
                <label
                  className="form-check-label inline-block cursor-pointer"
                  htmlFor="addAnother"
                >
                  Add another?
                </label>

                <Field
                  type="checkbox"
                  id="addAnother"
                  name="addAnother"
                  data-testid="AddAnother"
                  className="form-check-input m-2 h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                />
              </div>
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
