import ProjectCard from "../../../Components/Cards/ProjectCard";

const Projects = () => {
  return (
    <div id="home-projects">
      <div className="container">
        <h1>Current Projects</h1>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
