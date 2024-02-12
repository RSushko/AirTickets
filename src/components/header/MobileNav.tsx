"use client";

import { nav } from "@/lib/links";
import Link from "next/link";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ open, setOpen }: Props) => {
  return (
    <nav
      className={`${
        !open ? "hidden" : ""
      } fixed top-0 right-0 bottom-0 left-0 z-10 bg-slate-600 opacity-95 text-end p-4`}
    >
      <div className="">
        <button onClick={() => setOpen(!open)} className="">
          <svg fill="none" viewBox="0 0 24 24" height="3em" width="3em">
            <path
              fill="currentColor"
              d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
            />
          </svg>
        </button>
        <ul className="text-5xl text-black w-full text-center flex flex-col gap-4">
          {nav.map((el, i) => {
            return (
              <li className="bg-gray-200 rounded-2xl p-4" key={i}>
                <Link href={el.link}>{el.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
