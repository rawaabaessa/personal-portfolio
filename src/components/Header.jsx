import Nav from "./Nav";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  return (
    <>
      {/* todo : using motion when scroll add background color to header */}
      <header className="sticky top-0 w-full z-50">
        <div className="flex items-center justify-between px-6 py-6 lg:px-32">
          {theme === "dark" ? (
            <img src={logoDark} className="w-10 md:w-16" />
          ) : (
            <img src={logoLight} className="w-10 md:w-16" />
          )}
          <Nav />
        </div>
      </header>
    </>
  );
};

export default Header;
