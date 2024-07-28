import { Skills } from "./Feature";
import { skillset } from "@/constant";

const Skill = () => {
  return (
    <section id="skill" className="mt-32 text-center space-y-12">
      <h1 className="text-4xl">Skills</h1>

      <div className="flex justify-center flex-col xl:flex-row space-y-12 xl:space-y-0 space-x-0 xl:space-x-6">
        {skillset.map(({ skill, title }, i) => (
          <Skills key={i} title={title} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skill;
