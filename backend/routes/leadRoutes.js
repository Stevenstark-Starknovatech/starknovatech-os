const express = require("express");

const {
  addLead,
  getLeads,
  updateLeadStatus,
  deleteLead,
} = require("../controllers/leadController");

const router = express.Router();

router.post("/add-lead", addLead);

router.get("/leads", getLeads);

router.put(
  "/update-lead-status/:id",
  updateLeadStatus
);

router.delete(
  "/delete-lead/:id",
  deleteLead
);

module.exports = router;