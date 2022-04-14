import { WARMUP, EXERCISE, STRETCH } from "../consts";
import ActivityList from "./ActivityList";

const ViewSection = () => {
  return (
    <div className="bg-gray-700 text-white rounded my-2 p-5">
      <h1 className="text-3xl my-5">View your planned workout below</h1>
      <div className="grid md:grid-cols-3 gap-10">
        <ActivityList type={WARMUP} />
        <ActivityList type={EXERCISE} />
        <ActivityList type={STRETCH} />
      </div>
    </div>
  );
};

export default ViewSection;
