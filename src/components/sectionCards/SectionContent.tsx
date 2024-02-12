type ContentProps = {
  children: React.ReactNode;
};

const SectionContent: React.FC<ContentProps> = ({ children }) => {
  return (
    <div
      className={
        "grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 mb-12 justify-items-center w-full"
      }
    >
      {children}
    </div>
  );
};

export default SectionContent;
