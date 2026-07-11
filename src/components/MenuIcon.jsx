import { Menu, X } from "lucide-react";

const MenuIcon = ({ isOpen, handleClick }) => {
  const classes =
    "md:hidden text-light-gray dark:text-white dark:hover:text-secondery hover:text-mid-pink cursor-pointer";
  return (
    <button
      onClick={handleClick}
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
    >
      {isOpen ? <X className={classes} /> : <Menu className={classes} />}
    </button>
  );
};

export default MenuIcon;
