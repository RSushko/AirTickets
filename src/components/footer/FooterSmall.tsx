"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { data, icons, apps } from "@/lib/links";
import { CheckMarkIcon } from "@/lib/svgIcons";

type Props = {
  [key: number]: boolean;
};

const FooterSmall = () => {
  const [state, setState] = React.useState<Props>({
    0: false,
    1: false,
    2: false,
  });

  function toggle(i: number) {
    setState((prevState) => ({
      ...prevState,
      [i]: !prevState[i],
    }));
  }

  return (
    <footer className="bg-[#C2CFF0] px-2">
      {data.map((el, i) => {
        return (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className="py-4 flex justify-between w-full"
            >
              <span className="text-gray-800 font-semibold">{el.title}</span>
              <CheckMarkIcon
                className={
                  state[i]
                    ? "duration-300 -rotate-90"
                    : "duration-300 rotate-90"
                }
              />
            </button>
            <ul
              className={`border-b-2 overflow-hidden duration-1000 ${
                state[i] ? "h-full max-h-80" : "max-h-0 duration-700"
              }`}
            >
              {el.entries.map((item, j) => {
                return (
                  <li
                    className="text-gray-700 hover:underline cursor-pointer mb-4"
                    key={j}
                  >
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div className="align-middle sm:flex sm:justify-around my-8 ">
        <div>
          <h4 className="text-center mb-2 lg:mb-4 text-gray-800 font-semibold">
            Follow us
          </h4>
          <div className="flex justify-center gap-4">
            {icons.map((el, i) => {
              return (
                <Link key={i} href="#">
                  <Image src={`/${el}.svg`} alt={el} width={23} height={23} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="pt-4">
          <h4 className="text-center mb-1 lg:mb-2 text-gray-800 font-semibold">
            Download the Utravel app
          </h4>
          <div className="flex justify-center gap-4">
            {apps.map((el, i) => {
              return (
                <Image
                  key={i}
                  src={`/${el}.png`}
                  alt={el}
                  width={110}
                  height={30}
                />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSmall;
