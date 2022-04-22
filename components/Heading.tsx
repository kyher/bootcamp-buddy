type props = {
  text: string;
};

const Heading = ({ text }: props) => {
  return (
    <h1 className="text-3xl mb-5 text-center text-gray-700 font-bold">
      {text}
    </h1>
  );
};

export default Heading;
