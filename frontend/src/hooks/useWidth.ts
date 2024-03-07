import React from "react";

const useWidth = () => {
  const [width, setWidth] = React.useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

export default useWidth;
