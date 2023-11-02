import profile from "../assets/images/profile/profile.jpeg";
import cv from "../assets/file/cv.pdf";

const Profile = () => {
  return (
    <div id="profile" className="mt-32 text-center">
      <h1 className="text-4xl text-center mb-8">Profile</h1>
      <div>
        <img src={profile} alt="profile" className="w-32 flex mx-auto rounded-full" />
      </div>
      <p className="text-center my-8">
        I have learned web development from several courses to attending bootcamps. I have several projects as a
        portfolio
      </p>
      <a
        href={cv}
        target="blank"
        className="bg-yellow-300 p-3 rounded-lg text-center font-thin hover:font-bold ease-in-out duration-300"
      >
        Click CV
      </a>
    </div>
  );
};

export default Profile;
