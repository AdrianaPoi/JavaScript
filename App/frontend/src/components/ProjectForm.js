import React, { useEffect, useState } from "react";
import { TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../redux/actions/employeeAction";
// import ButterToast, { Cinnamon } from "butter-toast";
// import { AssignmentTurnedIn } from "@material-ui/icons";

const initialFieldValues = {
  //id: "",
  project_name: "",
  start_date: "",
  planned_end_date: "",
  description: "",
  project_code: "",
};

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  postBtn: {
    width: "50%",
  },
});

const ProjectForm = ({ classes, ...props }) => {
  useEffect(() => {
    if (props.currentId != 0) {
      setValues({
        ...props.postProjectList.find((x) => x._id == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

  const validate = () => {
    let temp = { ...errors };
    temp.project_name = values.project_name ? "" : "This field is required.";
    temp.start_date = values.start_date ? "" : "This field is required.";
    temp.planned_end_date = values.planned_end_date
      ? ""
      : "This field is required.";
    temp.description = values.description ? "" : "This field is required.";
    temp.project_code = values.project_code ? "" : "This field is required.";

    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };

  var { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFieldValues, props.setCurrentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    const onSuccess = () => {
      window.alert("submitted succeeded");
      resetForm();
    };
    if (validate()) {
      if (props.currentId == 0) props.createProject(values, onSuccess);
      else props.updateProject(values, onSuccess);
    }
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}
    >
      <TextField
        name="project_name"
        variant="outlined"
        label="Project Name"
        fullWidth
        value={values.project_name}
        onChange={handleInputChange}
        {...(errors.project_name && {
          error: true,
          helperText: errors.project_name,
        })}
      />
      <TextField
        name="start_date"
        variant="outlined"
        label="Start Date"
        fullWidth
        multiline
        value={values.start_date}
        onChange={handleInputChange}
        {...(errors.start_date && {
          error: true,
          helperText: errors.start_date,
        })}
      />
      <TextField
        name="planned_end_date"
        variant="outlined"
        label="Planned End Date"
        fullWidth
        multiline
        value={values.planned_end_date}
        onChange={handleInputChange}
        {...(errors.planned_end_date && {
          error: true,
          helperText: errors.planned_end_date,
        })}
      />
      <TextField
        name="description"
        variant="outlined"
        label="Description"
        fullWidth
        multiline
        value={values.description}
        onChange={handleInputChange}
        {...(errors.description && {
          error: true,
          helperText: errors.description,
        })}
      />
      <TextField
        name="project_code"
        variant="outlined"
        label="Project code"
        fullWidth
        multiline
        value={values.project_code}
        onChange={handleInputChange}
        {...(errors.project_code && {
          error: true,
          helperText: errors.project_code,
        })}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        className={classes.postBtn}
      >
        Submit
      </Button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  postProjectList: state.projectReducer.list,
});

const mapActionToProps = {
  createProject: actions.create,
  updateProject: actions.update,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(ProjectForm));
