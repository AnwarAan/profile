import { useEffect, useState } from "react";
import { hangoutImage, poscahsImage } from "../assets/images/project/index";
import { techHangout, techPoscash } from "../constant";
import { TechStack } from "./Component";
import Banner from "./Banner";
const Project = () => {
  const [image, setImage] = useState(hangoutImage);

  useEffect(() => {
    setImage(hangoutImage);
  }, [image]);

  return (
    <div id="project" className="mt-32">
      <h1 className="text-4xl text-center">Project</h1>
      <div className="my-12">
        <p className="text-2xl text-left my-2">Hangout - Event Ticket Management</p>
        <Banner images={hangoutImage} />
        <p className="bg-yellow-300 inline-block p-1">Description :</p>
        <p>
          create event ticket management, users can register and log in to the application. users can create events,
          users can create promotions for their events, users who want to register for events must register, users can
          leave reviews every time they attend an event, responsive web and mobile displays
        </p>
        <div className="md:flex my-4">
          <div>
            <p className="w-32 text-start">Tech Stack :</p>
          </div>
          <div className="flex flex-wrap">
            <TechStack tech={techHangout} />
          </div>
        </div>

        <p className="text-left">
          Repositories
          <a
            className="mx-4 hover:bg-yellow-300 p-2 rounded-md ease-in-out duration-300"
            href="https://github.com/AnwarAan/hangout.git"
            target="blank"
          >
            Client
          </a>
          <a
            href="https://github.com/AnwarAan/hangout-api.git"
            target="blank"
            className="hover:bg-yellow-300 p-2 rounded-md ease-in-out duration-300"
          >
            Server
          </a>
        </p>
      </div>

      <div>
        <p className="text-2xl text-left my-2">Poscash - Cashier App</p>
        <Banner images={poscahsImage} />
        <p className="bg-yellow-300 inline-block p-1">Description :</p>
        <p>
          Cashier Application, users act as cashiers and admins, admins can register cashiers, admins can create sales
          reports, admins can manage products. Cashiers can carry out transactions, the display is web and mobile
          responsive
        </p>
        <div className="md:flex my-4">
          <div>
            <p className="w-32 text-start">Tech Stack :</p>
          </div>
          <div className="flex flex-wrap items-center">
            <TechStack tech={techPoscash} />
          </div>
        </div>

        <p className="text-left">
          Repositories
          <a
            className="hover:bg-yellow-300 p-2 rounded-md ease-in-out duration-300 mx-4"
            href="https://github.com/AnwarAan/poscash.git"
            target="blank"
          >
            Click
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
