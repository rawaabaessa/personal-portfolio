import NavItem from "./NavItem";
import { useState } from "react";
import MenuIcon from "./MenuIcon";
import DropDownMenu from "./DropDownMenu";
import Language from "./Language";
import { useLang } from "../hooks/useLang";
import Theme from "./Theme";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
const NAVITEMS = [
  {
    id: 1,
    name: "home",
  },
  {
    id: 2,
    name: "about",
  },
  {
    id: 3,
    name: "skills",
  },
  {
    id: 4,
    name: "projects",
  },
];

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLang("home");
  function handleMobileMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }
  // motion
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <div className="flex flex-row-reverse gap-5 md:gap-0">
        <MenuIcon isOpen={isMobileMenuOpen} handleClick={handleMobileMenu} />
        <nav className="flex items-center gap-5 ">
          <motion.ul
            animate={{
              y: isScrolled ? 20 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className={`hidden md:flex items-center justify-center gap-5 lg:gap-10 text-md px-10 py-3 bg-white dark:bg-white/2 dark:backdrop-blur-sm dark:border dark:border-white/20 rounded-full shadow-pink dark:shadow-none ${isScrolled && "fixed top-0 left-1/2 -translate-x-1/2 mx-auto"}`}
          >
            {NAVITEMS.map((item) => {
              return (
                <NavItem key={item.id}>
                  <li>{t(`nav.${item.name}`)}</li>
                </NavItem>
              );
            })}
          </motion.ul>
          <Language />
          <Theme />
        </nav>
      </div>
      {isMobileMenuOpen && <DropDownMenu nav={NAVITEMS} />}
    </>
  );
};

export default Nav;
