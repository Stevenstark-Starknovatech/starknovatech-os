const express = require("express");

const {
 addLead,
 getLeads,
 updateLeadStatus,
 deleteLead,
 convertLeadToClient,
} = require("../controllers/leadController");

const verifyToken =
 require("../middleware/authMiddleware");

const router =
 express.Router();

router.post(
 "/add-lead",
 verifyToken,
 addLead
);

router.get(
 "/leads",
 verifyToken,
 getLeads
);

router.put(
 "/update-lead-status/:id",
 verifyToken,
 updateLeadStatus
);

router.delete(
 "/delete-lead/:id",
 verifyToken,
 deleteLead
);

router.post(
 "/convert-client/:id",
 verifyToken,
 convertLeadToClient
);

module.exports =
 router;