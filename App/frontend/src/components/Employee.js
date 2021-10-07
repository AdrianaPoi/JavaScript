import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions/employeeAction";
import {
  Grid,
  Paper,
  withStyles,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  //   Typography,
  //   Divider,
  //   Button,
} from "@material-ui/core";
import EmployeeForm from "./EmployeeForm";
// import ButterToast, { Cinnamon } from "butter-toast";
// import { DeleteSweep } from "@material-ui/icons";

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
});

const Employee = ({ classes, ...props }) => {
  useEffect(() => {
    props.fetchAllEmployees();
  }, []); //DidMount
  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <EmployeeForm />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Adress</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Hire Date</TableCell>
                  <TableCell align="right">Salary</TableCell>
                  <TableCell align="right">Job Title</TableCell>
                  <TableCell align="right">Project ID</TableCell>
                </TableRow>
              </TableHead>
              {props.postEmployeeList.map((record, index) => {
                return (
                  <TableBody>
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {" "}
                        {record.id}
                      </TableCell>
                      <TableCell align="right">{record.name}</TableCell>
                      <TableCell align="right">{record.adress}</TableCell>
                      <TableCell align="right">{record.email}</TableCell>
                      <TableCell align="right">{record.hire_date}</TableCell>
                      <TableCell align="right">{record.salary}</TableCell>
                      <TableCell align="right">{record.job_title}</TableCell>
                      <TableCell align="right">{record.projectId}</TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  postEmployeeList: state.employeeReducer.list,
});

const mapActionToProps = {
  fetchAllEmployees: actions.fetchAll,
  //deletePostMessage: actions.Delete,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(Employee));
