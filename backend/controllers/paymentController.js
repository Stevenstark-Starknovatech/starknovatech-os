const pool = require("../config/db");

const addPayment = async (req, res) => {
  const {
    invoice_id,
    client_name,
    total_amount,
    paid_amount,
  } = req.body;

  const pending_amount =
    total_amount - paid_amount;

  await pool.query(
    `INSERT INTO payments
(invoice_id,client_name,total_amount,paid_amount,pending_amount)
VALUES($1,$2,$3,$4,$5)`,
    [
      invoice_id,
      client_name,
      total_amount,
      paid_amount,
      pending_amount,
    ]
  );

  res.json({
    message: "Payment Added",
  });
};

const getPayments = async (
  req,
  res
) => {
  const data = await pool.query(
    "SELECT * FROM payments ORDER BY id DESC"
  );

  res.json(data.rows);
};

module.exports = {
  addPayment,
  getPayments,
};