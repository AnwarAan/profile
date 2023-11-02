import { BiLogoGmail } from "react-icons/bi";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="mt-32">
      <h1 className="text-4xl text-center">Contact Me</h1>
      <div className="flex justify-center h-72 items-center">
        <a href="mailto:name@email.com" target="blank">
          <BiLogoGmail size={80} />
        </a>
        <a href="https://www.instagram.com/mcnwr76/" target="blank" className="mx-12">
          <AiFillInstagram size={80} />
        </a>
        <a href="https://www.linkedin.com/in/muchamad-choirul-anwar-aa4351211" target="blank">
          <AiFillLinkedin size={80} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
