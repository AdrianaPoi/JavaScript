import "./ProjectsPage.css";
import Project from "../components/Project";

const ProjectsPage = () => {
  return (
    <div className="projectPage">
      <h2 className="projectPage_title">Projects</h2>
      <div className="projectsPage_table">
        <Project />
      </div>
    </div>
  );
};

export default ProjectsPage;
