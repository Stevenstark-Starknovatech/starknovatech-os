const express = require("express");

const {
 createInvoice,
 getInvoices,
 downloadInvoicePdf,
} = require("../controllers/invoiceController");

const verifyToken =
 require("../middleware/authMiddleware");

const verifyAdmin =
 require("../middleware/adminMiddleware");

const router =
 express.Router();

router.post(
 "/create-invoice",
 verifyToken,
 verifyAdmin,
 createInvoice
);

router.get(
 "/invoices",
 verifyToken,
 verifyAdmin,
 getInvoices
);

router.get(
 "/invoice-pdf/:id",
 verifyToken,
 verifyAdmin,
 downloadInvoicePdf
);

module.exports =
 router;