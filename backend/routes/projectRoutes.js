const express = require("express");

const {
  addProject,
  getProjects,
} = require("../controllers/projectController");

const router = express.Router();

router.post("/add-project", addProject);

router.get("/projects", getProjects);

module.exports = router;