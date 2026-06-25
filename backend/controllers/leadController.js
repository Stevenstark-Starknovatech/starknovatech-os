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
      (company_name, contact_person, phone, email, service_required, budget)
      VALUES ($1,$2,$3,$4,$5,$6)
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
    console.error(err.message);
    res.status(500).send("Error adding lead");
  }
};

const getLeads = async (req, res) => {
  try {
    const allLeads = await pool.query(
      "SELECT * FROM leads ORDER BY id DESC"
    );

    res.json(allLeads.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error fetching leads");
  }
};

const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedLead = await pool.query(
      `UPDATE leads
       SET status=$1
       WHERE id=$2
       RETURNING *`,
      [status, id]
    );

    res.json(updatedLead.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error updating lead");
  }
};

const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM leads WHERE id=$1",
      [id]
    );

    res.json({
      message: "Lead deleted successfully",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error deleting lead");
  }
};

module.exports = {
  addLead,
  getLeads,
  updateLeadStatus,
  deleteLead,
};