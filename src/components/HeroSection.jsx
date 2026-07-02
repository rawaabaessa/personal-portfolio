import heroImage from "../assets/heroImage.svg";
import heroImageLight from "../assets/hero-image-light.svg";
import Button from "./Button";
import { ArrowDownToLine } from "lucide-react";
import Container from "./Container";
import { useLang } from "../hooks/useLang";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../contexts/ThemeContext";

const HeroSection = () => {
  const { t } = useLang("home");
  const { lang } = useLanguage();
  const { theme } = useTheme();
  return (
    <section id="home" className="relative text-white px-6 py-16 md:px-10">
      <Container>
        <div className="flex items-center flex-col md:flex-row">
          <div className="max-w-2xl flex flex-col items-center justify-baseline md:items-start gap-10">
            <div className="flex flex-col gap-7 items-center md:items-start">
              <p className="font-bold text-32 text-light-gray dark:text-white">
                {t("hero.welcome")}{" "}
                <span className="bg-[linear-gradient(to_right,#9b3586_0%,#9B3586_100%)] bg-clip-text text-transparent">
                  {t("hero.name")}
                </span>
              </p>
              <h1
                className={
                  "text-7xl md:text-90 text-light-heading dark:text-white font-bold text-center mb-6  md:text-start [text-shadow:0_5px_0_#EFC9E7] dark:[text-shadow:0_5px_0_#722763]"
                }
              >
                {t("hero.title")}
              </h1>
              <p className="text-center text-light-gray-50 dark:text-white capitalize md:text-start text-xl">
                {t("hero.description")}
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Button>
                <a
                  href="https://wa.me/967739665833"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.contact")}
                </a>
              </Button>
              <Button
                variant="outline"
                Icon={<ArrowDownToLine className="w-4 h-4 md:w-5 md:h-5" />}
              >
                <a href="/Rawaa-Baessa-CV.pdf" download="Rawaa-CV.pdf">
                  {t("hero.cv")}
                </a>
              </Button>
            </div>
          </div>

          <div
            className={`hidden lg:block pointer-events-none absolute top-10 ${lang === "en" ? "right-50" : "left-50"}`}
          >
            <img
              src={theme === "dark" ? heroImage : heroImageLight}
              alt="Hero Image"
              className="w-75 md:w-125 lg:w-130 h-130"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
