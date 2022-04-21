import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/">
      <a
        data-testid="BackButton"
        className="bg-gray-700 hover:bg-gray-900 text-white shadow-lg p-1 rounded-lg text-lg"
      >
        <h2>Go Back</h2>
      </a>
    </Link>
  );
};

export default BackButton;
