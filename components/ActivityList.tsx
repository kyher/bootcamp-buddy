import { Activity } from "../types";

type props = {
  activities: Activity[];
  type: string;
};

const ActivityList = ({ activities, type }: props) => {
  return (
    <div>
      <h3>{type.toUpperCase()}</h3>
      {activities
        .filter((actvity) => actvity.type === type)
        .map((type, index) => (
          <p key={index}>{type.title}</p>
        ))}
    </div>
  );
};

export default ActivityList;
