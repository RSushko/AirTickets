import Image from "next/image";
import Link from "next/link";

export type ArticleProps = {
  image: string;
  title: string;
  text: string;
};

const CardArticle: React.FC<{ info: ArticleProps }> = ({ info }) => {
  return (
    <div className="overflow-clip rounded-lg max-w-96">
      <div className="relative h-40 w-auto">
        <Image src={`/${info.image}.png`} alt={info.image} fill />
      </div>
      <div className="relative border-2 p-2 lg:p-4 h-56">
        <h3 className="text-center text-gray-800 pt-2 lg:pt-4 mb-2">
          {info.title}
        </h3>
        <p className="text-gray-500">{info.text}</p>
        <div className="absolute flex justify-end right-0 bottom-0">
          <Link href="#">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="3rem"
              width="3rem"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
