import { ArrowRightIcon } from "@/lib/svgIcons";
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
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardArticle;
