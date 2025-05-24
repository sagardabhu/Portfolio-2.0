"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MouseEvent, useState } from "react";
import Logo from "./Logo/Logo";
import Menu from "./Menus/Menu/Menu";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(true);

  useMotionValueEvent(scrollY, "change", () => {
    const footer = document.querySelector(".footer");
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      setHidden(footerTop <= window.innerHeight);
    }
  });
    const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev); // toggles between true/false
  };


  return (
    <motion.div
      className=" fixed top-0 w-full flex justify-between items-center sm:px-4 laptop:px-10 sm:py-2 laptop:py-6 border-b-2 border-gray-300 bg-transparent backdrop-blur-sm z-[99] rounded-[50]"
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      onContextMenu={(e: MouseEvent) => {
        e.preventDefault();
      }}
    >
      <Logo />
      <Menu closeMenu={toggleMenu} />
 
    </motion.div>
  );
}
