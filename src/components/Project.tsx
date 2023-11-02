import { hangoutImage, poscahsImage } from "../assets/images/project/index";
import { techHangout, techPoscash } from "../constant";

const Project = () => {
  return (
    <div id="project" className="mt-32">
      <h1 className="text-4xl text-center">Project</h1>
      <div className="my-12">
        <p className="text-2xl text-left my-2">Hangout - Event Ticket Management</p>
        <div className="flex flex-wrap justify-center">
          {hangoutImage.map((item, i) => (
            <div key={i}>
              <img className="w-[560px] m-2" src={item} alt="" />
            </div>
          ))}
        </div>

        <div className="flex my-8">
          <div>
            <p className="w-32 text-start">Tech Stack :</p>
          </div>
          <div className="flex flex-wrap">
            {techHangout.map((item, i) => (
              <p className="mx-2 md:mx-4 bg-yellow-300 mb-2 p-1" key={i}>
                {item}
              </p>
            ))}
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
        <div className="flex flex-wrap justify-center">
          {poscahsImage.map((item, i) => (
            <div key={i}>
              <img className="w-[560px] m-2" src={item} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex my-8">
        <div>
          <p className="w-32 text-start">Tech Stack :</p>
        </div>
        <div className="flex flex-wrap items-center">
          {techPoscash.map((item, i) => (
            <p className="mx-2 md:mx-4 bg-yellow-300 mb-2 p-1" key={i}>
              {item}
            </p>
          ))}
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
  );
};

export default Project;
