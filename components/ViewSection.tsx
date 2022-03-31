import { exercise } from "../types";
import { WARMUP, EXERCISE, STRETCH } from "../consts";

type props = {
  exercises: exercise[];
};

const ViewSection = ({ exercises }: props) => {
  return (
    <div>
      <h3>Warmups</h3>
      {exercises
        .filter((exercise) => exercise.type === WARMUP)
        .map((exercise, index) => (
          <p key={index}>{exercise.title}</p>
        ))}
      <h3>Exercises</h3>
      {exercises
        .filter((exercise) => exercise.type === EXERCISE)
        .map((excercise, index) => (
          <p key={index}>{excercise.title}</p>
        ))}
      <h3>Stretches</h3>
      {exercises
        .filter((exercise) => exercise.type === STRETCH)
        .map((excercise, index) => (
          <p key={index}>{excercise.title}</p>
        ))}
    </div>
  );
};

export default ViewSection;
