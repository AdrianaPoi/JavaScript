import "./Employee.css";
import { useState } from "react";
import Axios from "axios";
//import background from "./img/img.jpg"

const Project = () => {
  const [projectList, setProjectList] = useState([]);

  function getProjects() {
    Axios.get("http://localhost:3000/api/projects").then((response) => {
      setProjectList(response.data);
    });
  }

  return (
    // <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>
    <div className="App">
      <button className="button" onClick={getProjects}>
        Show Projects
      </button>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Project Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">Planned end date</th>
            <th scope="col">Description</th>
            <th scope="col">Project Code</th>
          </tr>
        </thead>
        {projectList.map((val) => {
          return (
            <tbody>
              <tr>
                <td> {val.project_name}</td>
                <td> {val.start_date}</td>
                <td> {val.planned_end_date}</td>
                <td> {val.description}</td>
                <td> {val.project_code}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Project;
