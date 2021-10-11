import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions/projectActions";
import moment from "moment";
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
import ProjectForm from "./ProjectForm";

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

const Project = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.fetchAllProjects();
  }, []); //DidMount

  const onDelete = (id) => {
    const onSuccess = () => {
      window.alert("submitted succeeded");
      window.location.reload(false);
    };

    if (window.confirm("Are you sure to delete this record?"))
      props.deleteProjects(id, onSuccess);
  };
  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <ProjectForm {...{ currentId, setCurrentId }} />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Project Name</TableCell>
                  <TableCell align="right">Start Date</TableCell>
                  <TableCell align="right">Planned end date</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Project Code</TableCell>
                </TableRow>
              </TableHead>
              {props.postProjectList.map((record, index) => {
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
                      <TableCell align="right">{record.project_name}</TableCell>
                      <TableCell align="right">
                        {" "}
                        {moment(record.start_date).format("D.MM.YYYY")}
                      </TableCell>
                      <TableCell align="right">
                        {moment(record.planned_end_date).format("D.MM.YYYY")}
                      </TableCell>
                      <TableCell align="right">{record.description}</TableCell>
                      <TableCell align="right">{record.project_code}</TableCell>
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
  postProjectList: state.projectReducer.list,
});

const mapActionToProps = {
  fetchAllProjects: actions.fetchAll,
  deleteProjects: actions.Delete,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(Project));
