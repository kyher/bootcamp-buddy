import { DurationBasedActivity, RepBasedActivity } from "../types";
import { REP, DURATION } from "../consts";

type props = {
  activities: (DurationBasedActivity | RepBasedActivity)[];
  type: string;
  repOrDuration: string;
};

const ActivityList = ({ activities, type, repOrDuration }: props) => {
  return (
    <div>
      <h3 className="text-lg italic">{type.toUpperCase()}</h3>
      {repOrDuration === DURATION &&
        activities
          .filter((activity) => activity.type === type)
          .map((activityOfType, index) => (
            <p key={index}>
              {activityOfType.title} for {activityOfType.duration} mins
            </p>
          ))}
    </div>
  );
};

export default ActivityList;
