import { motion } from "motion/react";
import Revel from "./Revel";

const Container = ({ children }) => {
  return (
    <motion.div className="max-w-7xl mx-auto">
      <Revel>{children}</Revel>
    </motion.div>
  );
};

export default Container;
