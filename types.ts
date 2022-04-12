export type Activity = {
  title: string;
  type: string;
};

export type DurationBasedActivity = Activity & {
  duration: number;
};

export type RepBasedActivity = Activity & {
  reps: number;
};
