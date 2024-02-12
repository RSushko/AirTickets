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
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
      {link && (
        <Link href="#" className="text-blue-800">
          {link}
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
