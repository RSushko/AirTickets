import Link from "next/link";
import Image from "next/image";

import style from "./style.module.css";
import logo from "@/public/logo.svg";
import { nav } from "@/app/links/links";

const Header = () => {
  return (
    <header className={`${style.header} text-white`}>
      <div className="container">
        <div className="flex pt-[4.5rem] justify-between">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <nav>
            <ul className="flex gap-14">
              {nav.map((el, i) => {
                return (
                  <li className="text-2xl" key={i}>
                    <Link href={el.link}>{el.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <h1
          className={`${style.title} font-medium pb-20 pt-36 ml-auto max-w-lg text-right text-5xl`}
        >
          We are here for you. Worldwide
        </h1>
      </div>
    </header>
  );
};

export default Header;
