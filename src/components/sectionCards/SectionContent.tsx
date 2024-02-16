type ContentProps = {
  children: React.ReactNode;
};

const SectionContent: React.FC<ContentProps> = ({ children }) => {
  return (
    <div
      className={
        "grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6 mb-12 justify-items-center"
      }
    >
      {children}
    </div>
  );
};

export default SectionContent;
