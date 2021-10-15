import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions/employeeAction";
import moment from "moment";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
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
  Button,
} from "@material-ui/core";
import EmployeeForm from "./EmployeeForm";

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
  const [currentId, setCurrentId] = useState(0);
  const auth = useSelector((state) => state.authReducer);
  useEffect(() => {
    props.fetchAllEmployees();
  }, []); //DidMount

  const onDelete = (id) => {
    const onSuccess = () => {
      window.alert("submitted succeeded");
      window.location.reload();
    };
    if (window.confirm("Are you sure to delete this record?"))
      props.deleteEmployee(id, onSuccess);
  };
  if (!auth.id) return <Redirect to="/signin" />;
  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <EmployeeForm {...{ currentId, setCurrentId }} />
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
                      <TableCell align="left" type="date">
                        {moment(record.hire_date).format("D.MM.YYYY")}
                      </TableCell>
                      <TableCell align="right">{record.salary}</TableCell>
                      <TableCell align="right">{record.job_title}</TableCell>
                      <TableCell align="right">{record.projectId}</TableCell>
                      <td className={classes.actionDiv}>
                        <Button
                          variant="contained"
                          size="small"
                          className={classes.smMargin}
                          onClick={() => setCurrentId(record.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          className={classes.smMargin}
                          onClick={() => onDelete(record.id)}
                        >
                          Delete
                        </Button>
                      </td>
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
  deleteEmployee: actions.Delete,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(Employee));
