const pool = require("../config/db");

const createInvoice = async (req, res) => {
  const {
    client_id,
    client_name,
    amount,
  } = req.body;

  const invoice_number =
    "INV-" + Date.now();

  await pool.query(
    `INSERT INTO invoices
(client_id,client_name,invoice_number,amount)
VALUES($1,$2,$3,$4)`,
    [
      client_id,
      client_name,
      invoice_number,
      amount,
    ]
  );

  res.json({
    message: "Invoice created",
  });
};

const getInvoices = async (
  req,
  res
) => {
  const data = await pool.query(
    "SELECT * FROM invoices ORDER BY id DESC"
  );

  res.json(data.rows);
};

module.exports = {
  createInvoice,
  getInvoices,
};