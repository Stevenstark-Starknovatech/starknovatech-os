const pool = require("../config/db");

const addLead = async (req, res) => {
  try {
    const {
      company_name,
      contact_person,
      phone,
      email,
      service_required,
      budget,
    } = req.body;

    const newLead = await pool.query(
      `INSERT INTO leads
      (company_name,contact_person,phone,email,service_required,budget)
      VALUES($1,$2,$3,$4,$5,$6)
      RETURNING *`,
      [
        company_name,
        contact_person,
        phone,
        email,
        service_required,
        budget,
      ]
    );

    res.json(newLead.rows[0]);
  } catch (err) {
    res.status(500).send("Error");
  }
};

const getLeads = async (req, res) => {
  const allLeads = await pool.query(
    "SELECT * FROM leads ORDER BY id DESC"
  );

  res.json(allLeads.rows);
};

const updateLeadStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const updatedLead = await pool.query(
    `UPDATE leads SET status=$1 WHERE id=$2 RETURNING *`,
    [status, id]
  );

  res.json(updatedLead.rows[0]);
};

const deleteLead = async (req, res) => {
  const { id } = req.params;

  await pool.query(
    "DELETE FROM leads WHERE id=$1",
    [id]
  );

  res.json({
    message: "Deleted",
  });
};

const convertLeadToClient = async (
  req,
  res
) => {
  const { id } = req.params;

  const leadData = await pool.query(
    "SELECT * FROM leads WHERE id=$1",
    [id]
  );

  const lead = leadData.rows[0];

  await pool.query(
    `INSERT INTO clients
(company_name,contact_person,phone,email,service_taken,project_value)
VALUES($1,$2,$3,$4,$5,$6)`,
    [
      lead.company_name,
      lead.contact_person,
      lead.phone,
      lead.email,
      lead.service_required,
      lead.budget,
    ]
  );

  await pool.query(
    "DELETE FROM leads WHERE id=$1",
    [id]
  );

  res.json({
    message: "Converted to client",
  });
};

module.exports = {
  addLead,
  getLeads,
  updateLeadStatus,
  deleteLead,
  convertLeadToClient,
};