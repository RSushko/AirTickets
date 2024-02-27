export const ArrowRightIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 16 16"
      height="3rem"
      width="3rem"
    >
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
      />
    </svg>
  );
};

export const CheckMarkIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.57143 6H7M7 6L1 0.5M7 6L1 11.5"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BurgerOpenIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 15 15"
      height="3em"
      width="3em"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const BurgerOpenClose = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      height="3em"
      width="3em"
    >
      <path
        fill="currentColor"
        d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
      />
    </svg>
  );
};

export const ArrowTopIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
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
  );
};
