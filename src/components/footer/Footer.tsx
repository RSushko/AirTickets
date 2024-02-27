"use client";

import React from "react";
import Link from "next/link";
import { data } from "@/lib/links";
import ScrollButton from "@/scrollButton/ScrollButton";
import FooterSmall from "./FooterSmall";
import {
  AppleStoreIcon,
  FacebookIcon,
  GoogleStoreIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/lib/svgIcons";

const Footer = () => {
  const [screen, setScreen] = React.useState(false);
  React.useEffect(() => setScreen(window.innerWidth <= 768), []);

  return screen ? (
    <FooterSmall />
  ) : (
    <footer className="relative bg-[#C2CFF0] pt-4">
      <div className="container_inner">
        <div className="grid grid-cols-3">
          {data.map((key, i) => {
            return (
              <div
                key={i}
                className={i == 1 ? "text-center" : i == 2 ? "text-right" : ""}
              >
                <h4 className="text-gray-800 font-semibold mb-2 lg:mb-4">
                  {key.title}
                </h4>
                <ul>
                  {key.entries.map((el, j) => {
                    return (
                      <li key={j} className="text-gray-700">
                        <Link className="hover:underline" href={el.link}>
                          {el.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end gap-32 lg:gap-52 pt-8 mb-10">
          <div>
            <h4 className="text-center mb-2 lg:mb-4 text-gray-800 font-semibold">
              Follow us
            </h4>
            <div className="flex justify-center gap-4">
              <Link href="#" className="w-12 h-12">
                <FacebookIcon />
              </Link>
              <Link href="#">
                <InstagramIcon className="w-12 h-12" />
              </Link>
              <Link href="#">
                <TwitterIcon className="w-12 h-12" />
              </Link>
              <Link href="#">
                <YouTubeIcon className="w-12 h-12" />
              </Link>
              <Link href="#">
                <LinkedinIcon className="w-12 h-12" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-center mb-2 lg:mb-4 text-gray-800 font-semibold">
              Download the Utravel app
            </h4>
            <div className="flex justify-center gap-4">
              <Link href="#" className="w-52 h-12">
                <AppleStoreIcon />
              </Link>
              <Link href="#" className="w-52 h-12">
                <GoogleStoreIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {window.innerWidth > 1400 && <ScrollButton />}
    </footer>
  );
};

export default Footer;
