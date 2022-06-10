// const express = require("express");
// const Stripe= require("stripe");
// require("dotenv").config();
// //const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const router=express.Router();
// const { isAuthenticatedUser } = require("../middleware/auth");

// router.post("/payment/process",isAuthenticatedUser,  async(req,res)=>{
//   const myPayment = await stripe.paymentIntents.create({
//     amount: req.body.amount,
//     currency: "inr",
//     metadata: {
//       company: "Ecommerce",
//     },
//   });

//   res
//     .status(200)
//     .json({ success: true, client_secret: myPayment.client_secret });
// });

// router.get('/stripeapikey',isAuthenticatedUser,async(req,res)=>{
//   res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
// });



  






 const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

 module.exports = router;



