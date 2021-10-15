const express = require("express");
const router = express.Router();
const db = require("../models");
const auth = require("../middleware/auth");

// get all employees
router.get("/all", auth, async (req, res, next) => {
  db.employee.findAll().then((employees) => res.send(employees));
});

// get single employee by name
router.get("/find/:name", (req, res) => {
  db.employee
    .findAll({
      where: {
        name: req.params.name,
      },
    })
    .then((employee) => res.send(employee));
});

// post new employee
router.post("/new", auth, (req, res) => {
  db.employee
    .create({
      name: req.body.name,
      adress: req.body.adress,
      email: req.body.email,
      hire_date: req.body.hire_date,
      salary: req.body.salary,
      job_title: req.body.job_title,
    })
    .then((submitedEmployee) => res.send(submitedEmployee));
});

// edit a employee
router.put("/edit", auth, (req, res) => {
  db.employee
    .update(
      {
        name: req.body.name,
        adress: req.body.adress,
        email: req.body.email,
        hire_date: req.body.hire_date,
        salary: req.body.salary,
        job_title: req.body.job_title,
      },
      {
        where: { id: req.body.id },
      }
    )
    .then(() => res.send("success"));
});

// delete employee
router.delete("/delete/:id", auth, (req, res) => {
  db.employee
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => res.send("success"));
});

//get employee + project
router.get("/employee/project", (req, res) => {
  db.employee
    .findAll({
      include: [db.project],
    })
    .then((employees) => {
      res.send(employees);
    });
});

module.exports = router;
