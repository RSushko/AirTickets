"use client";

import { nav } from "@/lib/links";
import { BurgerCloseIcon } from "@/lib/svgIcons";
import Link from "next/link";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ setOpen }: Props) => {
  return (
    <nav className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-slate-600 opacity-95 text-end p-4">
      <button onClick={() => setOpen(false)}>
        <BurgerCloseIcon className="w-12 h-12" />
      </button>
      <ul className="text-5xl text-black w-full text-center flex flex-col gap-4">
        {nav.map((el, i) => {
          return (
            <li key={i} className="bg-gray-200 rounded-2xl p-4">
              <Link href={el.link}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
