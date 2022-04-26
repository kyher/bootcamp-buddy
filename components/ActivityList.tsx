import { Activity } from "../types";
import ActivityCard from "./ActivityCard";
import { useEffect, useState } from "react";

type props = {
  type: string;
};

const ActivityList = ({ type }: props) => {
  const [activities, setActivities] = useState<Activity[]>();

  useEffect(() => {
    const typeInStorage = localStorage.getItem(type);
    if (typeInStorage) {
      setActivities(JSON.parse(typeInStorage));
    }
  }, [type]);

  return (
    <div>
      <h3 className="text-lg italic text-center">{type.toUpperCase()}</h3>
      {activities
        ? activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))
        : "No activity set."}
    </div>
  );
};

export default ActivityList;
