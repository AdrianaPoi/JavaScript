import "./EmployeesPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";

const EmployeesPage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="employeesPage">
      <h2 className="employeesPage_title">Employees </h2>
      <div className="employessPage_table">
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
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((val) => {
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
            })
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeesPage;
