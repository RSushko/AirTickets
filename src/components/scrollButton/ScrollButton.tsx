"use client";

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
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.16408 10.8953L4.74612 10.8953C4.83596 10.8953 4.9219 10.8563 4.98244 10.788L9.25783 5.86792L9.25784 16.849C9.25784 16.9348 9.32815 17.005 9.41409 17.005L10.586 17.005C10.6719 17.005 10.7422 16.9348 10.7422 16.849L10.7422 5.86792L15.0176 10.788C15.0762 10.8563 15.1621 10.8953 15.2539 10.8953L16.836 10.8953C16.9688 10.8953 17.041 10.7373 16.9531 10.6379L10.4707 3.17871C10.4121 3.11122 10.3397 3.05708 10.2583 3.01998C10.1769 2.98289 10.0885 2.96369 9.99905 2.96369C9.90958 2.96369 9.82117 2.98289 9.73979 3.01998C9.65841 3.05708 9.58596 3.11122 9.52736 3.17871L3.0469 10.6379C2.95901 10.7393 3.03127 10.8953 3.16408 10.8953Z"
            fill="white"
          />
        </svg>
      </span>
    </button>
  );
};

export default ScrollButton;
