import { ReactNode } from "react";
import Banner from "./Banner";
import moment from "moment";

export const TechStack = ({ tech }: { tech: string[] }) => {
  return (
    <div className="flex flex-wrap">
      {tech.map((item, i) => (
        <p className="mx-2 md:mx-4 bg-yellow-300 mb-2 p-1" key={i}>
          {item}
        </p>
      ))}
    </div>
  );
};

type PropsSkills<T, U, V> = {
  title: V;
  skill: { text: T; icon?: U }[];
};

export const Skills = <T extends ReactNode, U extends ReactNode, V extends ReactNode>({
  skill,
  title,
}: PropsSkills<T, U, V>) => {
  return (
    <div className="justify-between">
      <p className="text-xl font-bold">{title}</p>
      <div className="flex flex-wrap justify-between">
        {skill.map(({ text, icon }, i) => (
          <div className="items-center flex flex-grow w-32" key={i}>
            <div className="p-2">{icon}</div>
            {icon ? <p>{text}</p> : <p className="p-2">{text}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

type PropsProjects<T, U> = {
  title: T;
  banner: U[];
  description: T;
  techStack: U[];
  repos: { title: T; link: U }[];
};

export const Projects = <T extends ReactNode>({
  title,
  banner,
  description,
  techStack,
  repos,
}: PropsProjects<T, string>) => {
  console.log(repos);
  return (
    <div>
      <div className="flex items-center space-x-4">
        <p className="text-4xl">&#x2022;</p>
        <p className="text-2xl text-left my-2">{title}</p>
      </div>
      <Banner images={banner} />
      <p className="bg-yellow-300 inline-block p-1">Description :</p>
      <p>{description}</p>
      <div className="md:flex my-4">
        <div>
          <p className="w-32 text-start">Tech Stack :</p>
        </div>
        <div className="flex flex-wrap items-center">
          <TechStack tech={techStack} />
        </div>
      </div>

      <p className="text-left">
        {repos && repos?.length > 0 ? "Repositories" : ""}
        {repos &&
          repos?.map(({ title, link }, i) => (
            <a
              key={i}
              className="hover:bg-yellow-300 p-2 rounded-md ease-in-out duration-300 mx-4"
              href={link}
              target="blank"
            >
              {title}
            </a>
          ))}
      </p>
    </div>
  );
};

type PropsExperiences<T, U> = {
  title: T;
  company: T;
  from: U;
  until: U;
  description: T;
};

export const Experiences = <T extends ReactNode>({
  title,
  company,
  from,
  until,
  description,
}: PropsExperiences<T, Date>) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-center space-x-2 text:xl lg:text-2xl font-bold mt-4">
        <p>{title}</p>
        <p>-</p>
        <p>{company}</p>
      </div>

      <div className="flex justify-center space-x-2 text-base font-bold">
        <p>{moment(from).format("MMM Y")}</p>
        <p>-</p>
        {until.getDate() === new Date().getDate() ? <p>Until Now</p> : <p>{moment(until).format("MMM Y")}</p>}
        <p>({moment(new Date(until).getTime() + new Date(86400000).getTime()).diff(from, "M")} month)</p>
      </div>

      <p>{description}</p>
      <div className="border-2 w-3/4 mx-auto rounded-full border-slate-300/80"></div>
    </div>
  );
};

type PropsContact<T, U> = {
  link: T;
  icon: U;
};

export const Contacts = <T extends string, U extends ReactNode>({ link, icon }: PropsContact<T, U>) => {
  return (
    <a href={link} target="blank">
      {icon}
    </a>
  );
};
