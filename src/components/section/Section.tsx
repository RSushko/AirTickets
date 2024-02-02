import Link from "next/link";

type SectionInfo = {
  title?: string;
  subtitle?: string;
  button?: string;
  children: React.ReactNode;
  className: {
    heading?: string;
    subHeading?: string;
    content: string;
    subtitle?: string;
    button?: string;
  };
};

const Section: React.FC<SectionInfo> = ({
  title,
  subtitle,
  button,
  className,
  children,
}) => {
  return (
    <section>
      {className.heading && <h3 className={className.heading}>{title}</h3>}
      {className.subHeading && (
        <div className={className.subHeading}>
          {subtitle && <p className={className.subtitle}>{subtitle}</p>}
          {button && (
            <Link className={className.button} href="#">
              {button}
            </Link>
          )}
        </div>
      )}

      <div className={className.content}>{children}</div>
    </section>
  );
};

export default Section;
