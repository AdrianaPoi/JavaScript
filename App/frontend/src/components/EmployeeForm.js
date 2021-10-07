import React, { useEffect, useState } from "react";
import { TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../redux/actions/employeeAction";
// import ButterToast, { Cinnamon } from "butter-toast";
// import { AssignmentTurnedIn } from "@material-ui/icons";

const initialFieldValues = {
  //id: "",
  name: "",
  adress: "",
  email: "",
  hire_date: "",
  salary: "",
  job_title: "",
  projectId: "",
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

const EmployeeForm = ({ classes, ...props }) => {
  useEffect(() => {
    if (props.currentId != 0) {
      setValues({
        ...props.postEmployeeList.find((x) => x._id == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

  const validate = () => {
    let temp = { ...errors };
    temp.name = values.name ? "" : "This field is required.";
    temp.adress = values.adress ? "" : "This field is required.";
    temp.email = values.email ? "" : "This field is required.";
    temp.hire_date = values.hire_date ? "" : "This field is required.";
    temp.salary = values.salary ? "" : "This field is required.";
    temp.job_title = values.job_title ? "" : "This field is required.";
    temp.projectId = values.projectId ? "" : "This field is required.";

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
      if (props.currentId == 0) props.createEmployee(values, onSuccess);
      else props.updateEmployee(values, onSuccess);
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
        name="name"
        variant="outlined"
        label="Name"
        fullWidth
        value={values.name}
        onChange={handleInputChange}
        {...(errors.name && { error: true, helperText: errors.name })}
      />
      <TextField
        name="adress"
        variant="outlined"
        label="Adress"
        fullWidth
        multiline
        value={values.adress}
        onChange={handleInputChange}
        {...(errors.adress && { error: true, helperText: errors.adress })}
      />
      <TextField
        name="email"
        variant="outlined"
        label="Email"
        fullWidth
        multiline
        value={values.email}
        onChange={handleInputChange}
        {...(errors.email && { error: true, helperText: errors.email })}
      />
      <TextField
        name="hire_date"
        variant="outlined"
        label="Hire Date"
        fullWidth
        multiline
        value={values.hire_date}
        onChange={handleInputChange}
        {...(errors.hire_date && { error: true, helperText: errors.hire_date })}
      />
      <TextField
        name="salary"
        variant="outlined"
        label="Salary"
        fullWidth
        multiline
        value={values.salary}
        onChange={handleInputChange}
        {...(errors.salary && { error: true, helperText: errors.salary })}
      />
      <TextField
        name="job_title"
        variant="outlined"
        label="Job Title"
        fullWidth
        multiline
        value={values.job_title}
        onChange={handleInputChange}
        {...(errors.job_title && { error: true, helperText: errors.job_title })}
      />
      <TextField
        name="projectId"
        variant="outlined"
        label="Project ID"
        fullWidth
        multiline
        value={values.projectId}
        onChange={handleInputChange}
        {...(errors.projectId && { error: true, helperText: errors.projectId })}
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
  postEmployeeList: state.employeeReducer.list,
});

const mapActionToProps = {
  createEmployee: actions.create,
  updateEmployee: actions.update,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(EmployeeForm));
