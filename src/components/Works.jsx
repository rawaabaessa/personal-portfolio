import { PROJECTS } from "../data/projects";
import { useLang } from "../hooks/useLang";
import Container from "./Container";
import Heading from "./Heading";
import WorkItem from "./WorkItem";

const Works = () => {
  const { t } = useLang("home");
  return (
    <section className="px-6 py-16 md:px-10">
      <Container>
        <div className="flex flex-col gap-15">
          <Heading title={t("work.title")} />
          <div className="flex flex-col items-center gap-6 ">
            {PROJECTS.map((project, index) => {
              return (
                <WorkItem
                  key={project.id}
                  {...project}
                  reverse={index % 2 === 0}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Works;
