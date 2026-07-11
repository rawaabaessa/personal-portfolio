import { Globe } from "lucide-react";
import NavItem from "./NavItem";
import { useLanguage } from "../hooks/useLanguage";

const Language = () => {
  const { toggleLang } = useLanguage();

  return (
    <button onClick={toggleLang} aria-label="Toggle Language">
      <NavItem>
        <Globe />
      </NavItem>
    </button>
  );
};

export default Language;
