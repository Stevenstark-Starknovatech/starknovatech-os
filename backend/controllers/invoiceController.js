const pool = require("../config/db");
const PDFDocument = require("pdfkit");

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

const downloadInvoicePdf =
  async (req, res) => {
    const { id } = req.params;

    const data =
      await pool.query(
        "SELECT * FROM invoices WHERE id=$1",
        [id]
      );

    const invoice =
      data.rows[0];

    const doc =
      new PDFDocument();

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=invoice-${id}.pdf`
    );

    doc.pipe(res);

    doc.fontSize(22).text(
      "STARKNOVATECH INVOICE"
    );

    doc.moveDown();

    doc.text(
      `Invoice No: ${invoice.invoice_number}`
    );

    doc.text(
      `Client: ${invoice.client_name}`
    );

    doc.text(
      `Amount: ₹${invoice.amount}`
    );

    doc.text(
      `Status: ${invoice.status}`
    );

    doc.end();
  };

module.exports = {
  createInvoice,
  getInvoices,
  downloadInvoicePdf,
};