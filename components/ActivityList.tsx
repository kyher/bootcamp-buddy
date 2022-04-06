import { Activity } from "../types";

type props = {
  activities: Activity[];
  type: string;
};

const ActivityList = ({ activities, type }: props) => {
  return (
    <div>
      <h3 className="text-lg italic">{type.toUpperCase()}</h3>
      {activities
        .filter((actvity) => actvity.type === type)
        .map((activityOfType, index) => (
          <p key={index}>{activityOfType.title} for {activityOfType.duration} mins</p>
        ))}
    </div>
  );
};

export default ActivityList;
