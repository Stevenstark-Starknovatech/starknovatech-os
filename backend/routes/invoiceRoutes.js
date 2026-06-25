const express = require("express");

const {
  createInvoice,
  getInvoices,
  downloadInvoicePdf,
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

router.get(
  "/invoice-pdf/:id",
  downloadInvoicePdf
);

module.exports = router;