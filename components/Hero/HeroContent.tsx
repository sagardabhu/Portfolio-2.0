import { inter } from "@/fonts";
import { motion } from "framer-motion";
import { MdOutlineLocationOn } from "react-icons/md";
import Image from "next/image";


export default function HeroContent() {
  return (
    <div className="text-left text-neutral-300 bg-transparent">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 4 }}
        className="text-left sm:text-5xl tablet:text-[9rem] houseMontage-font uppercase font-bold "
      >
        Sagar Dabhi
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 4.5 }}
        className={` w-[100%] laptop:w-full sm:text-4xl tablet:text-6xl ml-2 uppercase font-black houseMontage-font`}
      >
        Frontend Web Devloper
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 5 }}
        className="font-bold sm:text-base tablet:text-2xl sm:w-[90%] laptop:w-1/2 py-8 text-justify items-center milker-font flex capitalize "
      >
        <MdOutlineLocationOn className="text-4xl capitalize ml-10 houseMontage-font " />
        Junagadh , Gujrat
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 5.5 }}
        className="sm:w-[90%] laptop:w-1/2"
      >
        <h4 className="sm:text-2xl tablet:text-2xl milker-font ml-10 capitalize font-bold">
         Download Resume
        </h4>
      </motion.div>
    </div>
  );
} 

