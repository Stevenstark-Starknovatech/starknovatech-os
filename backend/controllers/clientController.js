const pool = require("../config/db");

const getClients = async (req, res) => {
  try {
    const allClients = await pool.query(
      "SELECT * FROM clients ORDER BY id DESC"
    );

    res.json(allClients.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error fetching clients");
  }
};

module.exports = {
  getClients,
};