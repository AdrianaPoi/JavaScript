import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
//import EmployeesPage from "./pages/EmployeesPage";
import Employee from "./components/Employee";

import ProjectsPage from "./pages/ProjectsPage";
//components
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Employee} />
          <Route exact path="/project" component={ProjectsPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
