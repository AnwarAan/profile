import { programming, frontend, backend, architecture, other } from "../constant";

const Skill = () => {
  return (
    <div id="skill" className="mt-32 text-center">
      <h1 className="text-4xl">Skills</h1>
      <div className="flex justify-center flex-col xl:flex-row ">
        <div className="m-4 justify-between">
          <p>Programming</p>
          <div className="flex flex-wrap">
            {programming.map((item, i) => (
              <div className="items-center flex flex-grow" key={i}>
                <div className="p-2">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="m-4">
          <p>Frontend</p>
          <div className="flex flex-wrap justify-between ">
            {frontend.map((item, i) => (
              <div className="items-center flex flex-grow w-32" key={i}>
                <div className="p-2">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="m-4">
          <p>Backend</p>
          <div className="flex flex-wrap justify-between">
            {backend.map((item, i) => (
              <div className="items-center flex flex-grow w-32" key={i}>
                <div className="p-2">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="m-4">
          <p>Other</p>
          <div className="flex flex-wrap justify-between">
            {other.map((item, i) => (
              <div className="items-center flex flex-grow w-32" key={i}>
                <div className="p-2">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="m-4">
          <p>Architecture</p>
          <div className="flex flex-wrap justify-center">
            {architecture.map((item, i) => (
              <div className="items-center flex mx-2 xl:mx-0" key={i}>
                <p className="py-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
