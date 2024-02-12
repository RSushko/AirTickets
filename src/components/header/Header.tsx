"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import style from "./style.module.css";
import logo from "@/public/logo.svg";
import { nav } from "@/lib/links";
import MobileNav from "./MobileNav";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className={`${style.header} text-white`}>
      <div className="container">
        <div className="pt-3 lg:pt-5 flex justify-between">
          <Link className="max-sm:w-1/4" href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex gap-14">
              {nav.map((el, i) => {
                return (
                  <li
                    className="text-2xl hover:border-b-2 border-b-orange-400"
                    key={i}
                  >
                    <Link href={el.link}>{el.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            onClick={() => setOpen((value) => !value)}
            className="block lg:hidden"
          >
            <svg fill="none" viewBox="0 0 15 15" height="3em" width="3em">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {open ? <MobileNav open={open} setOpen={setOpen} /> : ""}
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
