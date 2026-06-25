const express = require("express");
const cors = require("cors");
const pool = require("./db");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


// ADD LEAD API
app.post("/add-lead", async (req, res) => {
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
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [company_name, contact_person, phone, email, service_required, budget]
    );

    res.json(newLead.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error adding lead");
  }
});


// GET ALL LEADS
app.get("/leads", async (req, res) => {
  try {
    const allLeads = await pool.query(
      "SELECT * FROM leads ORDER BY id DESC"
    );

    res.json(allLeads.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error fetching leads");
  }
});


// UPDATE LEAD STATUS
app.put("/update-lead-status/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedLead = await pool.query(
      `UPDATE leads
       SET status = $1
       WHERE id = $2
       RETURNING *`,
      [status, id]
    );

    res.json(updatedLead.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error updating lead status");
  }
});


// DELETE LEAD
app.delete("/delete-lead/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM leads WHERE id = $1",
      [id]
    );

    res.json({
      message: "Lead deleted successfully"
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error deleting lead");
  }
});


// ROOT TEST
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Starknovatech Backend Running",
      database_time: result.rows[0],
    });
  } catch (err) {
    console.error("ERROR NAME:", err.name);
    console.error("ERROR MESSAGE:", err.message);
    console.error("FULL ERROR OBJECT:", err);
    res.status(500).send("Database connection failed");
  }
});


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});