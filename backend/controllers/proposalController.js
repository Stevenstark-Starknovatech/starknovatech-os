const pool = require("../config/db");
const PDFDocument = require("pdfkit");

const createProposal = async (req, res) => {
  const {
    client_id,
    client_name,
    service,
    price,
    timeline,
  } = req.body;

  const proposal_number =
    "PROP-" + Date.now();

  await pool.query(
    `INSERT INTO proposals
(client_id,client_name,proposal_number,service,price,timeline)
VALUES($1,$2,$3,$4,$5,$6)`,
    [
      client_id,
      client_name,
      proposal_number,
      service,
      price,
      timeline,
    ]
  );

  res.json({
    message: "Proposal Created",
  });
};

const getProposals = async (
  req,
  res
) => {
  const data = await pool.query(
    "SELECT * FROM proposals ORDER BY id DESC"
  );

  res.json(data.rows);
};

const downloadProposalPdf =
  async (req, res) => {
    const { id } = req.params;

    const data =
      await pool.query(
        "SELECT * FROM proposals WHERE id=$1",
        [id]
      );

    const proposal =
      data.rows[0];

    const doc =
      new PDFDocument();

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    doc.pipe(res);

    doc.fontSize(22).text(
      "STARKNOVATECH PROPOSAL"
    );

    doc.moveDown();

    doc.text(
      `Proposal No: ${proposal.proposal_number}`
    );

    doc.text(
      `Client: ${proposal.client_name}`
    );

    doc.text(
      `Service: ${proposal.service}`
    );

    doc.text(
      `Price: ₹${proposal.price}`
    );

    doc.text(
      `Timeline: ${proposal.timeline}`
    );

    doc.end();
  };

module.exports = {
  createProposal,
  getProposals,
  downloadProposalPdf,
};