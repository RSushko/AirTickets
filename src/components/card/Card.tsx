import Image from "next/image";
import Link from "next/link";

export type CardInfo = {
  name: string;
  date: string;
  transfer: string;
  time: string;
  company: string;
  price: number;
  discount?: boolean;
};

const Card: React.FC<{ data: CardInfo }> = ({ data }) => {
  return (
    <div className="flex overflow-clip rounded-lg">
      <div className="relative shrink-0 w-60">
        <Image
          className="object-fit "
          src={`/${data.name.toLocaleLowerCase()}.jpg`}
          alt={data.name}
          fill
        />
      </div>
      <div className="bg-orange-100 pt-5 pl-4 pb-4 w-full">
        <h3 className="text-gray-800 text-lg pb-4">{data.name}</h3>
        <p className="text-gray-500 text-sm">{data.date}</p>
        <span className="text-gray-500 text-sm mb-4">
          {data.transfer} ∙ {data.time}
        </span>
        <div className="relative h-8 w-20">
          <Link href={"#"}>
            <Image
              className="object-contain"
              src={`/${data.company}.png`}
              alt={data.company}
              fill
            />
          </Link>
        </div>
        <p
          className={`text-end ${
            data.discount ? "text-red-700" : "text-gray-800"
          } mr-4 text-lg`}
        >
          € {data.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
