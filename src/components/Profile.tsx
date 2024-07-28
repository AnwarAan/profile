import profile from "../assets/images/profile/profile.jpeg";
import cv from "../assets/file/cv.pdf";

const Profile = () => {
  return (
    <section id="profile" className="mt-32 text-center">
      <h1 className="text-4xl text-center mb-8">Profile</h1>
      <div>
        <img src={profile} alt="profile" className="w-32 flex mx-auto rounded-full" />
      </div>
      <p className="text-center my-8">
        I'm we b developer. Fast Learner. I also learn the latest technologies related to the projects I work on. I can
        communicate and work in a team well
      </p>
      <a
        href={cv}
        target="blank"
        className="bg-yellow-300 p-3 rounded-lg text-center font-thin hover:font-bold ease-in-out duration-300"
      >
        Click CV
      </a>
    </section>
  );
};

export default Profile;
