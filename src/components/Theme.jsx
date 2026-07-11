import { useThemeToggle } from "../hooks/useThemeToggle";
import NavItem from "./NavItem";
import { Moon, Sun } from "lucide-react";

const Theme = () => {
  const { toggleTheme, theme } = useThemeToggle();
  return (
    <button onClick={toggleTheme} aria-label="Toggle Theme">
      <NavItem>{theme === "light" ? <Moon /> : <Sun />}</NavItem>
    </button>
  );
};

export default Theme;
