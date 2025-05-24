import { useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);


  return (
    <div
      id="contacts"
      className="h-fit w-screen overflow-hidden"
      ref={container}
    >
      <div className="houseMontage-font bg-alt-black  h-fit relative rounded-3xl ">
        <div className="w-full flex flex-col justify-center items-start sm:px-2 laptop:px-2 laptop_l:px-12 pt-12 pb-20">
          <h1 className="tracking-wide capitalize sm:text-2xl tablet:text-4xl w-full text-center mt-12 font-black">
           
            <Link
              style={{ color: "#5D6AF2" }}
              href="https://discord.com/users/sagardabhi0844"
              className="sm:ml-2 tablet:ml-12 border-b-2 border-black laptop:ml-20 color-[#5D6AF2] "
            >
              Discord
            </Link>

            <Link
              style={{ color: "#2CD46B" }}
              href="https://wa.me/919843849354?text=Hello!%20I%27m%20interested%20in%20your%20web%20development%20services.%20Could%20you%20please%20provide%20more%20details%3F"
              className="sm:ml-2 tablet:ml-12 laptop:ml-20 border-b-2 border-black "
            >
              Whatsapp
            </Link>

            <Link
              style={{ color: "#086BCA" }}
              href="https://www.linkedin.com/in/sagar-dabhi-131a1626a/"
              className="sm:ml-2 tablet:ml-12 laptop:ml-20 border-b-2 border-black"
            >
              Linkedin
            </Link>

            <Link
              href="https://t.me/Sagardabhi816"
              style={{ color: "#38ACE2" }}
              className="sm:ml-2 tablet:ml-12 laptop:ml-20 border-b-2 border-black "
            >
              Telegram
            </Link>

          </h1>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
