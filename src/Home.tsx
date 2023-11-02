import Header from "./layout/Header";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <div id="home">
      <div className="overflow-scroll">
        <Header />
      </div>
      <div className="md:w-4/5 mx-auto w-11/12 ">
        <Profile />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
