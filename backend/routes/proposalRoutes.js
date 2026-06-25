const express = require("express");

const {
  createProposal,
  getProposals,
  downloadProposalPdf,
} = require("../controllers/proposalController");

const router = express.Router();

router.post(
  "/create-proposal",
  createProposal
);

router.get(
  "/proposals",
  getProposals
);

router.get(
  "/proposal-pdf/:id",
  downloadProposalPdf
);

module.exports = router;