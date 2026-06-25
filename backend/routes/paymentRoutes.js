const express = require("express");

const {
  addPayment,
  getPayments,
} = require("../controllers/paymentController");

const router = express.Router();

router.post(
  "/add-payment",
  addPayment
);

router.get(
  "/payments",
  getPayments
);

module.exports = router;