import "./ProjectsPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects as listProjects } from "../redux/actions/projectActions";

const ProjectsPage = () => {
  const dispatch = useDispatch();

  const getProjects = useSelector((state) => state.getProjects);
  const { projects, loading, error } = getProjects;
  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);
  return (
    <div className="projectsPage">
      <h2 className="projectsPage_title">Projects </h2>
      <div className="projectsPage_table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Project Name</th>
              <th scope="col">Start Date</th>
              <th scope="col">Planned end date</th>
              <th scope="col">Description</th>
              <th scope="col">Project Code</th>
            </tr>
          </thead>
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            projects.map((val) => {
              return (
                <tbody>
                  <tr>
                    <td> {val.id}</td>
                    <td> {val.project_name}</td>
                    <td> {val.start_date}</td>
                    <td> {val.planned_end_date}</td>
                    <td> {val.description}</td>
                    <td> {val.project_code}</td>
                  </tr>
                </tbody>
              );
            })
          )}
        </table>
      </div>
    </div>
  );
};

export default ProjectsPage;
