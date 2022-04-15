import Link from "next/link";

type props = {
  title: string;
  link: string;
};

const HomeLink = ({ title, link }: props) => {
  return (
    <div
      data-testid="HomeLink"
      className="bg-gray-700 text-white shadow-sm p-5 rounded-full text-lg col-span-1"
    >
      <Link href={link}>
        <a className="text-center	">
          <h2>{title} &rarr;</h2>
        </a>
      </Link>
    </div>
  );
};

export default HomeLink;
