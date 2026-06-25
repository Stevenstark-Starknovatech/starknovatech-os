const pool = require("../config/db");

const addProject = async (req, res) => {
  const {
    client_id,
    client_name,
    project_name,
    assigned_to,
    deadline,
  } = req.body;

  await pool.query(
    `INSERT INTO projects
(client_id,client_name,project_name,assigned_to,deadline)
VALUES($1,$2,$3,$4,$5)`,
    [
      client_id,
      client_name,
      project_name,
      assigned_to,
      deadline,
    ]
  );

  res.json({
    message: "Project added",
  });
};

const getProjects = async (req, res) => {
  const data = await pool.query(
    "SELECT * FROM projects ORDER BY id DESC"
  );

  res.json(data.rows);
};

module.exports = {
  addProject,
  getProjects,
};