import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { mountAnim, rotateX } from "../anim";
import Link from "next/link";
import { MenuItem } from "@/lib/const";
import { useLenis } from "lenis/react";

interface LinkProps {
  data: MenuItem;
  index: number;
  closeMenu: () => void;
}

const MenuLink = ({ data, index, closeMenu }: LinkProps) => {
  const { title } = data;
  const lenis = useLenis();



  return (
    <motion.div
     
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className={styles.el}
    >
      <Link
        onClick={() => {
          closeMenu();
          lenis?.scrollTo(`${data.href}`, { lerp: 0.02 });
        }}
        href={data.href}
      >
        {title}
      </Link>
    
    </motion.div>
  );
};

export default MenuLink;
