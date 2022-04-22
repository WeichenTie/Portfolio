import "./Home.css";

import Landing from "./Landing/Landing";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ContactMe from "./ContactMe/ContactMe";

const Home = () => {
  return (
    <div className="home-page">
      <Landing/>
      <Projects/>
      <Skills/>
      <ContactMe/>
    </div>
  );
};

export default Home;
