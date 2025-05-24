import { menuItem } from "@/lib/const";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { mountAnim, opacity, slideLeft } from "../anim";
import Link from "./link";
import styles from "./style.module.scss";

export default function Menu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <motion.div
      className={styles.menu}
      variants={opacity}
       initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 4 }}
    >

      <div className={styles.body}>
        {menuItem.map((el, index) => {
          return (
            <Link data={el} index={index} key={index} closeMenu={closeMenu} />
          );
        })}
      </div>

  
    </motion.div>
  );
}
