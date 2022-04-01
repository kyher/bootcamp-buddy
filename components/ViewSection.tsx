import { Activity } from "../types";
import { WARMUP, EXERCISE, STRETCH } from "../consts";
import ActivityList from "./ActivityList";

type props = {
  activities: Activity[];
};

const ViewSection = ({ activities }: props) => {
  return (
    <div>
      <ActivityList type={WARMUP} activities={activities} />
      <ActivityList type={EXERCISE} activities={activities} />
      <ActivityList type={STRETCH} activities={activities} />
    </div>
  );
};

export default ViewSection;
