// import ContactSection from "../components/ContactSection";
// import Footer from "../components/Footer";
import Header from "../components/Header";
// import HeroSection from "../components/HeroSection";
// import SkillsSection from "../components/SkillsSection";
// import Works from "../components/Works";
import { useLanguage } from "../hooks/useLanguage";

const Home = () => {
  const { lang } = useLanguage();
  return (
    <div className="relative min-h-screen bg-light-background dark:bg-background overflow-hidden">
      <div className="flex flex-col">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className={`absolute left-20 md:left-50 top-20 w-64 h-64 md:w-180 md:h-180 bg-mid-pink/50 rounded-full blur-7xl opacity-70 pointer-events-none`}
          />
          <div
            className={`absolute right-50 top-200 w-64 h-64 md:w-180 md:h-180 bg-mid-pink/50 rounded-full blur-7xl opacity-70 pointer-events-none`}
          />
          {/* <div
            className={`absolute ${lang === "en" ? "-right-20 md:-right-50" : "-left-20 md:-left-50"} top-20 w-64 h-64 md:w-180 md:h-180 bg-mid-pink/50 rounded-full blur-7xl opacity-70 pointer-events-none -z-10`}
          />

          <div
            className={`absolute ${lang === "en" ? "-left-50" : "-right-50"} top-200 w-64 h-64 md:w-180 md:h-180 bg-mid-pink/50 rounded-full blur-7xl opacity-70 pointer-events-none`}
          /> */}
        </div>
        <div className="relative z-10 ">
          <Header />
          {/* <HeroSection /> */}
          {/* <SkillsSection />
          <Works />
          <ContactSection />
          <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
