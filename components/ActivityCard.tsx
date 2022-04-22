import { REP } from "../consts";
import { Activity } from "../types";

type props = {
  activity: Activity;
};

const ActivityCard = ({ activity }: props) => {
  return (
    <div className="bg-gray-600 p-5 rounded">
      <h2 data-testid="ActivityCard">
        {activity.title} for{" "}
        {activity.repOrDuration === REP ? (
          <p>{activity.reps} reps</p>
        ) : (
          <p>{activity.duration} mins</p>
        )}
      </h2>
    </div>
  );
};

export default ActivityCard;
