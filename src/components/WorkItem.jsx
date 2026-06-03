import { FaGithub } from "react-icons/fa";
import Button from "./Button";
import { SKILLS } from "../data/skills";
import { LuArrowRightFromLine } from "react-icons/lu";
import { useLang } from "../hooks/useLang";
import Revel from "./Revel";

const WorkItem = ({
  title,
  image,
  github,
  liveDemo,
  technologies = [],
  reverse,
}) => {
  const { t } = useLang("home");
  return (
    <Revel>
      <div
        className={
          "flex flex-col md:flex-row gap-5" +
          (reverse ? " md:flex-row-reverse" : "")
        }
      >
        <div className="flex flex-col items-center justify-center gap-6 w-full md:w-75 h-75 bg-white dark:bg-white/2 dark:backdrop-blur-xl dark:border dark:border-white/20 rounded-3xl shadow-works">
          <h2 className="text-mid-pink dark:text-white font-bold text-4xl dark:[text-shadow:0_5px_0_#722763]">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-3 ">
            {technologies.map((tech) => {
              const skill = SKILLS.find((item) => item.name === tech);
              const Icon = skill.image;
              return (
                <Icon key={skill.id} className="w-9 h-9 text-light-pink" />
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-2">
            {
              // only show github button if github link is provided
              github && (
                <Button
                  variant="workBtn"
                  Icon={<FaGithub className="w-4 h-4 md:w-5 md:h-5" />}
                >
                  <a href={github}>{t("work.view")}</a>
                </Button>
              )
            }
            {liveDemo && (
              <Button
                variant="workBtn"
                Icon={
                  <LuArrowRightFromLine className="w-4 h-4 md:w-5 md:h-5" />
                }
              >
                <a href={liveDemo}>{t("work.live")}</a>
              </Button>
            )}
          </div>
        </div>
        <Revel>
          <div>
            <img src={image} className="rounded-2xl w-150 h-75" />
          </div>
        </Revel>
      </div>
    </Revel>
  );
};

export default WorkItem;
