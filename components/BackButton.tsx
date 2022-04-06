import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/">
          <a className="underline underline-offset-2 bg-slate-300 p-3 rounded-full">
            <h2>Go Back</h2>
          </a>
    </Link>
  );
};

export default BackButton;
