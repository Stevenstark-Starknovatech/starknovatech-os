const express = require("express");

const {
  createInvoice,
  getInvoices,
} = require("../controllers/invoiceController");

const router = express.Router();

router.post(
  "/create-invoice",
  createInvoice
);

router.get(
  "/invoices",
  getInvoices
);

module.exports = router;