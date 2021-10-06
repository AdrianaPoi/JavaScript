import "./Employee.css";
import { useState } from "react";
import Axios from "axios";
//import background from "./img/img.jpg"

const Employee = () => {
  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get("http://localhost:3000/api/all").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    // <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>
    <div className="App">
      <button className="button" onClick={getEmployees}>
        Show Employees
      </button>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Adress</th>
            <th scope="col">Email</th>
            <th scope="col">Hire Date</th>
            <th scope="col">Salary</th>
            <th scope="col">Job Title</th>
            <th scope="col">Project Id</th>
          </tr>
        </thead>
        {employeeList.map((val) => {
          return (
            <tbody>
              <tr>
                <td> {val.name}</td>
                <td> {val.adress}</td>
                <td> {val.email}</td>
                <td> {val.hire_date}</td>
                <td> {val.salary}</td>
                <td> {val.job_title}</td>
                <td> {val.projectId}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Employee;
