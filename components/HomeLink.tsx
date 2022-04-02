import Link from "next/link";

type props = {
  title: string;
  linkText: string;
  link: string;
};

const HomeLink = ({ title, linkText, link }: props) => {
  return (
    <div className=" bg-purple-400 p-5 rounded text-lg">
      <Link href={link}>
        <a className="underline">
          <h2>{title} &rarr;</h2>
          <p>{linkText}</p>
        </a>
      </Link>
    </div>
  );
};

export default HomeLink;
