import { Activity } from "../types";
import { WARMUP, EXERCISE, STRETCH } from "../consts";
import ActivityList from "./ActivityList";

type props = {
  activities: Activity[]; 
};

const ViewSection = ({ activities }: props) => {
  return (
    <div className="bg-gray-700 text-white rounded my-2 p-5">
    <h1 className="text-3xl my-5">View your planned workout below</h1>
    <div className="grid md:grid-cols-3 gap-10">
      <ActivityList type={WARMUP} activities={activities} />
      <ActivityList type={EXERCISE} activities={activities} />
      <ActivityList type={STRETCH} activities={activities} />
    </div>
    </div>
  );
};

export default ViewSection;
