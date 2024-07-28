import { experienceset } from "@/constant";
import { Experiences } from "./Feature";

export default function Experience() {
  return (
    <section id="experience" className="mt-32 text-lg xl:text-xl space-y-12">
      <h1 className="text-4xl text-center">Experience</h1>

      {experienceset.map(({ title, company, from, until, description }, i) => (
        <Experiences key={i} title={title} company={company} from={from} until={until} description={description} />
      ))}
    </section>
  );
}
