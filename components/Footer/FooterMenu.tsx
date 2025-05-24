import { inter } from "@/fonts";
import { footerMenuItem, socials } from "@/lib/const";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function FooterMenu() {
  const lenis = useLenis();
  const menuRefs = useRef<Array<HTMLDivElement | null>>([]);
  const socialRefs = useRef<Array<HTMLDivElement | null>>([]);

  const setMenuRef = (el: HTMLDivElement | null, index: number) => {
    menuRefs.current[index] = el;
  };

  const setSocialRef = (el: HTMLDivElement | null, index: number) => {
    socialRefs.current[index] = el;
  };

  useEffect(() => {
    const allRefs = [...menuRefs.current, ...socialRefs.current];

    allRefs.forEach((item) => {
      if (!item) return;

      const text = item.querySelector(".text-original");
      const textClone = item.querySelector(".text-clone");

      const tl = gsap.timeline({ paused: true });
      tl.to(text, { yPercent: -100, duration: 0.4, ease: "power2.inOut" }).to(
        textClone,
        { yPercent: -200, duration: 0.4, ease: "power2.inOut" },
        0
      );

      item.addEventListener("mouseenter", () => tl.play());
      item.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  return (
    <div className="flex justify-between items-end pt-4  mt-10">

      <div className="w-1/3">
        <ul
          className={`sm:text-[8px] tablet:text-xs uppercase ${inter.className} font-medium text-left  `}
        >
          {socials.map((social, index) => (
            <li key={index}>
              <Link href={social.href} target="_blank">
                <div
                  ref={(el) => setSocialRef(el, index)}
                  className="menu-item-container sm:h-[22px] tablet:h-10 overflow-hidden cursor-pointer"
                >
                  <div className="text-original">
                    <p
                     className="text-original"
                    >
                      {social.name}
                    </p>
                  </div>
                  <div className="text-clone absolute top-full text-white">
                    <p
                      className="text-original"
                    >
                      {social.name}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}{" "}
        </ul>
      </div>

       <div className="w-1/3">
        <ul
          className={`sm:text-[8px] tablet:text-xs uppercase ${inter.className} font-medium text-right`}
        >
          {footerMenuItem.map((menu, index) => (
            <li key={index}>
              <Link
                onClick={() => {
                  lenis?.scrollTo(`${menu.href}`, { lerp: 0.02 });
                }}
                href={menu.href}
              >
                <div
                  ref={(el) => setMenuRef(el, index)}
                  className="menu-item-container sm:h-[22px] tablet:h-8 overflow-hidden cursor-pointer"
                >
                  <div className="text-original">{menu.name}</div>
                  <div className="text-clone absolute top-full">
                    {menu.name}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
