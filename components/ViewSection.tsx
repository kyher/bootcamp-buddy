import { WARMUP, EXERCISE, STRETCH } from "../consts";
import ActivityList from "./ActivityList";
import Heading from "./Heading";

const ViewSection = () => {
  return (
    <div>
      <Heading text="View your planned workout below" />
      <div className="bg-gray-700 text-white rounded my-2 p-5">
        <div className="grid md:grid-cols-3 gap-10">
          <ActivityList type={WARMUP} />
          <ActivityList type={EXERCISE} />
          <ActivityList type={STRETCH} />
        </div>
      </div>
    </div>
  );
};

export default ViewSection;
