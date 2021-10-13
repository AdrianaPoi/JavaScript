import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { loadUser } from "./redux/actions/authAction";
import { makeStyles } from "@material-ui/core/styles";
//pages
import Employee from "./components/Employee";
import Project from "./components/Project";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
//components
import NavBar from "./components/NavBar";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      <Container>
        <NavBar />
        <Container className={classes.contentStyle}>
          <Switch>
            <Route exact path="/" component={Employee} />
            <Route exact path="/project" component={Project} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Container>
      </Container>
    </Router>
  );
}

export default App;
