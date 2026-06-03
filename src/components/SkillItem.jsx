import { motion } from "motion/react";
import Revel from "./Revel";

const SkillItem = ({ title, icon: Icon }) => {
  return (
    <Revel>
      <motion.div
        whileHover={{
          boxShadow: "0 5px 10px rgba(155, 53, 134, 0.75)",
          scale: 1.05,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
        className="w-26 h-28 flex flex-col items-center justify-center gap-2 bg-white dark:bg-white/2 dark:backdrop-blur-xl dark:border dark:border-white/20 rounded-3xl shadow-pink "
      >
        <Icon className="w-9 h-9 text-mid-pink dark:text-light-pink" />
        <span className="dark:text-white text-light-gray">{title}</span>
      </motion.div>
    </Revel>
  );
};

export default SkillItem;
