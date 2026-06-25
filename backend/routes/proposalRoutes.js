const express = require("express");

const {
 createProposal,
 getProposals,
 downloadProposalPdf,
} = require("../controllers/proposalController");

const verifyToken =
 require("../middleware/authMiddleware");

const verifyAdmin =
 require("../middleware/adminMiddleware");

const router =
 express.Router();

router.post(
 "/create-proposal",
 verifyToken,
 verifyAdmin,
 createProposal
);

router.get(
 "/proposals",
 verifyToken,
 verifyAdmin,
 getProposals
);

router.get(
 "/proposal-pdf/:id",
 verifyToken,
 verifyAdmin,
 downloadProposalPdf
);

module.exports =
 router;