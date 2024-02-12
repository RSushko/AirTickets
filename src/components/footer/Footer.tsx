import Link from "next/link";
import Image from "next/image";
import { data } from "@/lib/links";

const icons = ["facebook", "instagram", "twitter", "youTube", "linkedin"];
const apps = ["appstore", "googlePlay"];

const Footer = () => {
  return (
    <footer className="bg-[#C2CFF0] pt-4">
      <div className="container_inner">
        <div className="grid md:grid-cols-3 text-center">
          {data.map((key, i) => {
            return (
              <div key={i}>
                <h4 className="text-[#4E4E4E] font-semibold mb-4">
                  {key.title}
                </h4>
                <ul>
                  {key.entries.map((el, j) => {
                    return (
                      <li className="text-[#727171]" key={j}>
                        <Link href={el.link}>{el.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end gap-52 pt-4 mb-10">
          <div>
            <p className="text-center pb-4">Follow us</p>
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
          <div className="max-md:pt-4">
            <p className="text-center pb-4">Download the Utravel app</p>
            <div className="flex justify-center gap-4">
              {apps.map((el, i) => {
                return (
                  <Image
                    key={i}
                    src={`/${el}.svg`}
                    alt={el}
                    width={110}
                    height={30}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
