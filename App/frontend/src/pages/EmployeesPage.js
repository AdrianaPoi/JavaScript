import "./EmployeesPage.css";
import Employee from "../components/Employee";

const EmployeesPage = () => {
  return (
    <div className="employeesPage">
      <h2 className="employeesPage_title">Employees Page</h2>
      <div className="employessPage_table">
        <Employee />
      </div>
    </div>
  );
};

export default EmployeesPage;
