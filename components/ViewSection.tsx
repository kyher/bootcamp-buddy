type props = {
  workoutSection: {};
};

const ViewSection = ({ workoutSection }: props) => {
  return <div>{JSON.stringify(workoutSection)}</div>;
};

export default ViewSection;
