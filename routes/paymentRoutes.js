const express = require("express");
const router = express.Router();
const {isAuthenticate} = require('../middleware/authentication')
const {paymentProcess, sendStripeKey} = require('../controllers/paymentController')

router.post("/process", paymentProcess)
// router.get("/stripekey", isAuthenticate, sendStripeKey)

module.exports = router