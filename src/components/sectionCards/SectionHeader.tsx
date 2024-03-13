import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  link?: string;
};

const SectionHeader = ({ title, subtitle, link }: Props) => {
  return (
    <div className="mb-2 pt-8">
      <h3 className="text-gray-800 font-semibold">{title}</h3>
      {subtitle && link ? (
        <div className="sm:flex justify-between">
          <p className="text-gray-500">{subtitle}</p>
          <Link href="#" className="text-blue-800 hover:underline">
            {link}
          </Link>
        </div>
      ) : subtitle ? (
        <p className="text-gray-500">{subtitle}</p>
      ) : (
        link && (
          <Link href="#" className="text-blue-800 hover:underline">
            {link}
          </Link>
        )
      )}
    </div>
  );
};

export default SectionHeader;
