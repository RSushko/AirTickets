"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import style from "./style.module.css";
import { nav } from "@/lib/links";
import MobileNav from "./MobileNav";
import { BurgerOpenIcon } from "@/lib/svgIcons";
import logo from "@/public/logo.svg";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className={`${style.header} text-white`}>
      <div className="container">
        <div className="pt-3 lg:pt-5 flex justify-between">
          <Link className="max-sm:w-1/4" href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex gap-14">
              {nav.map((el, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={el.link}
                      className={`text-2xl ${
                        pathname == el.link
                          ? "border-b-2 border-b-orange-400"
                          : "hover:border-b-2 border-white"
                      }`}
                    >
                      {el.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            onClick={() => setOpen((value) => !value)}
            className="block md:hidden"
          >
            <BurgerOpenIcon className="w-12 h-12" />
          </button>
          {open && <MobileNav setOpen={setOpen} />}
        </div>
        <h1
          className={`${style.title} text-center font-medium pb-20 pt-36 lg:ml-auto lg:max-w-lg lg:text-right text-5xl`}
        >
          We are here for you. Worldwide
        </h1>
      </div>
    </header>
  );
};

export default Header;
