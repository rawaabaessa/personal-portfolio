import { useLanguage } from "../hooks/useLanguage";

const Heading = ({ title, isStillWhite }) => {
  const { lang } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h1
        className={`${
          isStillWhite ? "text-white" : "text-light-gray-50 dark:text-white"
        }  text-3xl md:text-4xl capitalize text-center font-bold ${lang === "ar" && "mb-2"}`}
      >
        {title}
      </h1>
      <div className="w-30 h-1 bg-[linear-gradient(to_right,#9b3586_0%,#9B3586_100%)]" />
    </div>
  );
};

export default Heading;
