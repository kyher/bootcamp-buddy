import { Activity } from "../types";
import ActivityCard from "./ActivityCard";
import { useEffect, useState } from "react";

type props = {
  type: string;
};

const ActivityList = ({ type }: props) => {
  const [activity, setActivity] = useState<Activity>();

  useEffect(() => {
    const typeInStorage = localStorage.getItem(type);
    if (typeInStorage) {
      setActivity(JSON.parse(typeInStorage));
    }
  }, [activity, type]);

  return (
    <div>
      <h3 className="text-lg italic text-center">{type.toUpperCase()}</h3>
      {activity ? <ActivityCard activity={activity} /> : "No activity set."}
    </div>
  );
};

export default ActivityList;
