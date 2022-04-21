import Link from "next/link";

type props = {
  title: string;
  link: string;
};

const HomeLink = ({ title, link }: props) => {
  return (
    <div
      data-testid="HomeLink"
      className="bg-gray-700 hover:bg-gray-900 text-white shadow-lg p-5 rounded-lg text-lg w-full"
    >
      <Link href={link}>
        <a className="text-center	font-bold">
          <h2>{title} &rarr;</h2>
        </a>
      </Link>
    </div>
  );
};

export default HomeLink;
