import Link from "next/link";
import { WARMUP } from "../consts";

type props = {
  setType: React.Dispatch<React.SetStateAction<string>>;
};

const InterstitialReset = ({ setType }: props) => {
  const handleClick = () => {
    setType(WARMUP);
    localStorage.clear();
  };
  return (
    <div>
      <p data-testid="InterstitialText">
        It looks like you have a workout already saved. Would you like to
        discard this and create a new one?
      </p>
      <button
        className="shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full my-5"
        onClick={() => handleClick()}
        data-testid="InterstitialCreate"
      >
        Out with the old, in with the new!
      </button>
      <Link href="/workout/view">
        <a className="text-center	font-bold">
          <button
            className="shadow bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
            data-testid="InterstitialView"
          >
            No thanks! Take me to my workout!
          </button>
        </a>
      </Link>
    </div>
  );
};

export default InterstitialReset;
