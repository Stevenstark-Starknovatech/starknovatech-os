const express = require("express");

const {
 addPayment,
 getPayments
} = require("../controllers/paymentController");

const verifyToken =
 require("../middleware/authMiddleware");

const verifyAdmin =
 require("../middleware/adminMiddleware");

const router =
 express.Router();

router.post(
 "/add-payment",
 verifyToken,
 verifyAdmin,
 addPayment
);

router.get(
 "/payments",
 verifyToken,
 verifyAdmin,
 getPayments
);

module.exports =
 router;