const express = require("express");
const router = express.Router();
const db = require("../models");
const auth = require("../middleware/auth");

// get all projects
router.get("/projects", auth, (req, res) => {
  db.project.findAll().then((projects) => res.send(projects));
});

// post new project
router.post("/new/project", auth, (req, res) => {
  db.project
    .create({
      project_name: req.body.project_name,
      start_date: req.body.start_date,
      planned_end_date: req.body.planned_end_date,
      description: req.body.description,
      project_code: req.body.project_code,
    })
    .then((submitedProject) => res.send(submitedProject));
});

// edit a project
router.put("/edit/project", auth, (req, res) => {
  db.project
    .update(
      {
        project_name: req.body.project_name,
        start_date: req.body.start_date,
        planned_end_date: req.body.planned_end_date,
        description: req.body.description,
        project_code: req.body.project_code,
      },
      {
        where: { id: req.body.id },
      }
    )
    .then(() => res.send("success"));
});

// delete project
router.delete("/delete/project/:id", auth, (req, res) => {
  db.project
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => res.send("success"));
});

module.exports = router;
