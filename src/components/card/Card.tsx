import Image from "next/image";
import Link from "next/link";

export type CardInfo = {
  name: string;
  date: string;
  transfer: string;
  time: string;
  company: string;
  price: number;
};

type Props = {
  data: CardInfo;
  discounted?: boolean;
};

const Card: React.FC<Props> = ({ data, discounted }) => {
  return (
    <div className="flex overflow-clip rounded-lg w-full">
      <div className="relative h-auto w-60 max-sm:w-80">
        <Image
          src={`/${data.name.toLocaleLowerCase()}.jpg`}
          alt={data.name}
          fill
        />
      </div>
      <div className="bg-orange-100 pt-5 pl-2 sm:pl-4 pb-4 w-full">
        <h3 className="text-gray-800 text-xl pb-4">{data.name}</h3>
        <p className="text-gray-500 text-base">{data.date}</p>
        <span className="text-gray-500 text-base block mb-2">
          {data.transfer} ∙ {data.time}
        </span>
        <div className="relative h-6 w-28">
          <Image
            className="object-contain"
            src={`/${data.company}.svg`}
            alt={data.company}
            fill
          />
        </div>
        <p
          className={`text-end text-xl mr-4 ${
            discounted ? "text-red-700" : "text-gray-800"
          }`}
        >
          € {data.price}
        </p>
      </div>
    </div>
  );
};

export default Card;