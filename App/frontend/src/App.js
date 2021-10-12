import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

//pages
import Employee from "./components/Employee";
import Project from "./components/Project";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
//components
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <NavBar />
        {/* <Container className={classes.contentStyle} maxWidth = "sm"> */}
        <Switch>
          <Route exact path="/" component={Employee} />
          <Route exact path="/project" component={Project} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Container>
      {/* </Container> */}
    </Router>
  );
}

export default App;
