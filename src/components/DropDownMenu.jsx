import { useLang } from "../hooks/useLang";
import NavItem from "./NavItem";
import { AnimatePresence, motion } from "motion/react";

const DropDownMenu = ({ nav }) => {
  const { t } = useLang("home");
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.menu
        variants={dropdownVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="md:hidden absolute w-full left-0 top-full bg-light-background dark:bg-background shadow-pink dark:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
      >
        <ul className="flex flex-col items-center gap-3 px-4 py-6">
          {nav.map((item) => {
            return (
              <NavItem key={item.id}>
                <li>{t(`nav.${item.name}`)}</li>
              </NavItem>
            );
          })}
        </ul>
      </motion.menu>
    </AnimatePresence>
  );
};

export default DropDownMenu;
