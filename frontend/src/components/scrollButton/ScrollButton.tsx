"use client";

import { ArrowTopIcon } from "@/lib/svgIcons";

const ScrollButton = () => {
  function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      onClick={scrollUp}
      className="absolute right-0 bottom-20 z-50 flex gap-2 bg-blue-700 text-white text-lg px-4 py-8 rounded-l-2xl"
    >
      <span>Go to top</span>
      <span>
        <ArrowTopIcon />
      </span>
    </button>
  );
};

export default ScrollButton;
