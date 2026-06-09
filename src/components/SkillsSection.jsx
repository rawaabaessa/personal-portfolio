import Heading from "./Heading";
import SkillItem from "./SkillItem";
import { SKILLS } from "../data/skills";
import Container from "./Container";
import { useLang } from "../hooks/useLang";

const SkillsSection = () => {
  const { t } = useLang("home");
  return (
    <section id="skills" className="px-6 py-16 md:px-10">
      <Container>
        <div className="flex flex-col items-center justify-center gap-15">
          <Heading title={t("skills.title")} />
          <div className="flex flex-wrap items-center justify-center gap-10">
            {SKILLS.map((item) => {
              return (
                <SkillItem key={item.id} title={item.name} icon={item.image} />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
