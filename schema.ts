import * as Yup from "yup";
import { MIN_DURATION, MAX_DURATION, MIN_REPS, MAX_REPS } from "./consts";

export const ActivitySchema = Yup.object().shape({
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
