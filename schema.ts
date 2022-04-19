import * as Yup from "yup";
import {
  MIN_DURATION,
  MAX_DURATION,
  MIN_REPS,
  MAX_REPS,
  DURATION,
  REP,
} from "./consts";

export const ActivitySchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  repOrDuration: Yup.string().required("Please select rep or duration"),
  duration: Yup.number().when("repOrDuration", {
    is: DURATION,
    then: Yup.number()
      .min(parseInt(MIN_DURATION), "Too low")
      .max(parseInt(MAX_DURATION), "Too high")
      .required("Please enter a duration"),
  }),
  reps: Yup.number().when("repOrDuration", {
    is: REP,
    then: Yup.number()
      .min(parseInt(MIN_REPS), "Too low")
      .max(parseInt(MAX_REPS), "Too high")
      .required("Please enter reps"),
  }),
});
