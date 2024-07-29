import { contactset } from "@/constant";
import { Contacts } from "./Feature";

const Contact = () => {
  return (
    <section id="contact" className="mt-32">
      <h1 className="text-4xl text-center">Contact Me</h1>
      <div className="flex justify-center h-72 items-center space-x-4 lg:space-x-12">
        {contactset.map(({ link, icon }, i) => (
          <Contacts key={i} link={link} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
