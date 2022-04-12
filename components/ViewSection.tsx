import { DurationBasedActivity, RepBasedActivity } from "../types";
import { WARMUP, EXERCISE, STRETCH } from "../consts";
import ActivityList from "./ActivityList";

type props = {
  activities: (DurationBasedActivity | RepBasedActivity)[];
  repOrDuration: {
    warmup: string;
    exercise: string;
    stretch: string;
  };
};

const ViewSection = ({ activities, repOrDuration }: props) => {
  return (
    <div className="bg-gray-700 text-white rounded my-2 p-5">
      <h1 className="text-3xl my-5">View your planned workout below</h1>
      <div className="grid md:grid-cols-3 gap-10">
        <ActivityList
          type={WARMUP}
          activities={activities}
          repOrDuration={repOrDuration.warmup}
        />
        <ActivityList
          type={EXERCISE}
          activities={activities}
          repOrDuration={repOrDuration.exercise}
        />
        <ActivityList
          type={STRETCH}
          activities={activities}
          repOrDuration={repOrDuration.stretch}
        />
      </div>
    </div>
  );
};

export default ViewSection;
