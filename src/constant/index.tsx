import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoGoLang,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoMongodb,
} from "react-icons/bi";
import { DiMysql, DiScrum, DiLinux } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import {
  SiDocker,
  SiExpress,
  SiJsonwebtokens,
  SiPostman,
  SiSequelize,
  SiJira,
  SiReactquery,
  SiChakraui,
  SiRadixui,
} from "react-icons/si";
import { MdHttp } from "react-icons/md";
import { GrServerCluster } from "react-icons/gr";

export const header = [
  { text: "Profile", path: "#profile" },
  { text: "Skills", path: "#skill" },
  { text: "Project", path: "#project" },
  { text: "Contact", path: "#contact" },
];

export const programming = [
  {
    text: "Javascript",
    icon: <BiLogoJavascript size={40} />,
  },
  {
    text: "Typescript",
    icon: <BiLogoTypescript size={40} />,
  },
  {
    text: "Go",
    icon: <BiLogoGoLang size={40} />,
  },
];

export const frontend = [
  {
    text: "HTML",
    icon: <BiLogoHtml5 size={40} />,
  },
  {
    text: "CSS",
    icon: <BiLogoCss3 size={40} />,
  },
  {
    text: "React Js",
    icon: <BiLogoReact size={40} />,
  },
  {
    text: "Redux",
    icon: <BiLogoRedux size={40} />,
  },
  {
    text: "Tailwind",
    icon: <BiLogoTailwindCss size={40} />,
  },
  {
    text: "Chakra UI",
    icon: <SiChakraui size={40} />,
  },
  {
    text: "Radix UI",
    icon: <SiRadixui size={40} />,
  },
  {
    text: "React Query",
    icon: <SiReactquery size={40} />,
  },
];

export const backend = [
  {
    text: "Node Js",
    icon: <BiLogoNodejs size={40} />,
  },
  {
    text: "Express Js",
    icon: <SiExpress size={40} />,
  },
  {
    text: "Rest API",
    icon: <MdHttp size={40} />,
  },
  {
    text: "Mongodb",
    icon: <BiLogoMongodb size={40} />,
  },
  {
    text: "Postgresql",
    icon: <BiLogoPostgresql size={40} />,
  },
  {
    text: "Mysql",
    icon: <DiMysql size={40} />,
  },
  {
    text: "Sequelize",
    icon: <SiSequelize size={40} />,
  },
  {
    text: "Postman",
    icon: <SiPostman size={40} />,
  },
  {
    text: "JWT",
    icon: <SiJsonwebtokens size={40} />,
  },
  {
    text: "Docker",
    icon: <SiDocker size={40} />,
  },
];

export const architecture = [
  {
    text: "MVC",
  },
  {
    text: "CQRS",
  },
  {
    text: "Clean Code",
  },
];

export const other = [
  {
    text: "Scrum",
    icon: <DiScrum size={40} />,
  },
  {
    text: "Jira",
    icon: <SiJira size={40} />,
  },
  {
    text: "VPS Server",
    icon: <GrServerCluster size={40} />,
  },
  {
    text: "Linux",
    icon: <DiLinux size={40} />,
  },
  {
    text: "Git",
    icon: <BsGit size={40} />,
  },
];

export const techHangout = [
  "HTML",
  "CSS",
  "Javascript",
  "ReactJS",
  "Tailwind",
  "React Query",
  "Redux",
  "NodeJS",
  "ExpressJS",
  "Mysql",
  "Sequelize",
  "Postman",
  "DBMS",
  "Dokcer",
  "Git",
];

export const techPoscash = [
  "HTML",
  "CSS",
  "Javascript",
  "Tailwind",
  "ReactJS",
  "React Query",
  "Redux",
  "NodeJS",
  "ExpressJS",
  "Mysql",
  "Sequelize",
  "DBMS",
  "Postman",
  "Git",
  "JIRA",
  "Scrum",
  "VPS Server",
];
