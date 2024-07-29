import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoJava,
  BiLogoSpringBoot,
  BiLogoGmail,
  BiLogoGithub,
} from "react-icons/bi";
import { SiBun, SiMicrosoftsqlserver } from "react-icons/si";
import { DiMysql, DiScrum, DiLinux } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { SiDocker, SiExpress, SiPostman, SiSequelize, SiJira } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { GrServerCluster } from "react-icons/gr";
import { hangoutImage, poscahsImage, tradingImage } from "@/assets/images/project";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export const header = [
  { text: "Profile", path: "#profile" },
  { text: "Skills", path: "#skill" },
  { text: "Experience", path: "#experience" },
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
    text: "Java",
    icon: <BiLogoJava size={40} />,
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
    text: "Tailwind",
    icon: <BiLogoTailwindCss size={40} />,
  },
  {
    text: "React Js",
    icon: <BiLogoReact size={40} />,
  },
  {
    text: "Next Js",
    icon: <BiLogoRedux size={40} />,
  },
];

export const backend = [
  {
    text: "Node Js",
    icon: <BiLogoNodejs size={40} />,
  },
  {
    text: "Bun",
    icon: <SiBun size={40} />,
  },
  {
    text: "Express Js",
    icon: <SiExpress size={40} />,
  },
  {
    text: "Spring Boot",
    icon: <BiLogoSpringBoot size={40} />,
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
    text: "Security",
    icon: <MdSecurity size={40} />,
  },
  {
    text: "Docker",
    icon: <SiDocker size={40} />,
  },
];

export const database = [
  {
    text: "Mysql",
    icon: <DiMysql size={40} />,
  },
  {
    text: "Postgre Sql",
    icon: <BiLogoPostgresql size={40} />,
  },
  {
    text: "Mongo Db",
    icon: <BiLogoMongodb size={40} />,
  },
  {
    text: "Sql Server",
    icon: <SiMicrosoftsqlserver size={40} />,
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
  "NodeJS",
  "ExpressJS",
  "Mysql",
  "Sequelize",
  "Postman",
  "Dokcer",
  "Github",
];

export const techPoscash = [
  "HTML",
  "CSS",
  "Javascript",
  "Tailwind",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "Mysql",
  "Sequelize",
  "Postman",
  "JIRA",
  "VPS Server",
  "Github",
];

const techTrading = [
  "HTML",
  "CSS",
  "Tailwind",
  "Typescript",
  "React",
  "Bun",
  "Express",
  "Sql Server",
  "Sequelize",
  "Postman",
  "Report Builder",
  "Reporting Service",
  "Github",
];

//SET ITEM

export const skillset = [
  { title: "Programming", skill: programming },
  { title: "Frontend", skill: frontend },
  { title: "Backend", skill: backend },
  { title: "Database", skill: database },
  { title: "Architecture", skill: architecture },
  { title: "Other", skill: other },
];

export const projectset = [
  {
    title: "Trading App",
    description:
      "Our team create application trading for distributor and warehousing, create CRUD, Journal, Reporting Service, Security and Authorization",
    banner: tradingImage,
    techStack: techTrading,
    repos: [],
  },
  {
    title: "Poscash - Cashier App",
    description: `Cashier Application, users act as cashiers and admins, admins can register cashiers, admins can create sales
          reports, admins can manage products. Cashiers can carry out transactions, the display is web and mobile
          responsive`,
    banner: poscahsImage,
    techStack: techPoscash,
    repos: [{ title: "Web", link: "https://github.com/AnwarAan/poscash.git" }],
  },
  {
    title: "Hangout - Event Tickert Management",
    description: `create event ticket management, users can register and log in to the application. users can create events,
          users can create promotions for their events, users who want to register for events must register, users can
          leave reviews every time they attend an event, responsive web and mobile displays`,
    banner: hangoutImage,
    techStack: techHangout,
    repos: [
      { title: "Client", link: "https://github.com/AnwarAan/hangout.git" },
      { title: "Server", link: "https://github.com/AnwarAan/hangout-api.git" },
    ],
  },
];

export const experienceset = [
  {
    title: "Fullstack Web Developer",
    company: "Mitraplus Infotek TotalSolusi",
    from: new Date("2023/12/04"),
    until: new Date(),
    description: `I work in IT consulting. we work on websites for Trading and SAAS. Our clients are factories, distributors,
    warehouses and insurance. On a trading project I created a backend to serve API to clients, used bun script,
    created architecture with MVC and clean code, designed database using sql server. implement security,
    authorization, and deployment . Apart from that, I also work on the frontend`,
  },
  {
    title: "Bootcamp Fullstack",
    company: "Purwadhika Digital School",
    from: new Date("2023/07/01"),
    until: new Date("2024/01/01"),
    description: `I learn Fullstack Development with Nodejs, Reactjs, Mysql technology and Management Project with Jira, Scrum tech hnology`,
  },
  {
    title: "React Development",
    company: "Freelance",
    from: new Date("2023/05/01"),
    until: new Date("2023/07/01"),
    description: `I joined in working on the National Police Integration Project with my friends for 2 months, I created dummy data for the MVP, then retrieve real data from the Postgresql database`,
  },
  {
    title: "Operator Production",
    company: "PT. Denso Indonesia",
    from: new Date("2021/06/07"),
    until: new Date("2023/06/06"),
    description: `Final inspection, checking the quality of automotive products and ensuring there are no defects before sending to customers`,
  },
];

export const contactset = [
  { link: "mailto:name@email.com", icon: <BiLogoGmail size={"4rem"} /> },
  { link: "https://www.instagram.com/mcnwr76/", icon: <AiFillInstagram size={"4rem"} /> },
  { link: "https://www.linkedin.com/in/muchamad-choirul-anwar-aa4351211", icon: <AiFillLinkedin size={"4rem"} /> },
  { link: "https://github.com/AnwarAan/", icon: <BiLogoGithub size={"4rem"} /> },
];
