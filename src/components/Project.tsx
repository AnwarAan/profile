import { useEffect, useState } from "react";
import { hangoutImage } from "../assets/images/project/index";
import { projectset } from "../constant";
import { Projects } from "./Feature";
const Project = () => {
  const [image, setImage] = useState(hangoutImage);

  useEffect(() => {
    setImage(hangoutImage);
  }, [image]);

  return (
    <section id="project" className="mt-32 space-y-12">
      <h1 className="text-4xl text-center">Project</h1>

      {projectset.map(({ title, description, banner, techStack, repos }, i) => (
        <Projects key={i} title={title} description={description} banner={banner} techStack={techStack} repos={repos} />
      ))}
    </section>
  );
};

export default Project;
