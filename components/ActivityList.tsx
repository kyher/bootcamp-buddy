import { REP } from "../consts";
import { Activity } from "../types";
import ActivityCard from "./ActivityCard";

type props = {
  activities: Activity[];
  type: string;
};

const ActivityList = ({ activities, type }: props) => {
  return (
    <div>
      <h3 className="text-lg italic">{type.toUpperCase()}</h3>
      {activities
        .filter((activity) => activity.type === type)
        .map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
    </div>
  );
};

export default ActivityList;
