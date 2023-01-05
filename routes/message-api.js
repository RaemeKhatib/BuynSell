const express = require('express');
const router  = express.Router();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
// const OrderQueries = require('../db/queries/orders');

//get /messages

router.get('/:productId', (req, res) => {
  const productId= req.params.productId
console.log("+++++++", productId)

  res.render('message', { productId, message: "" });
});



//post /messages
router.post('/:productid', (req, res) => {
  const productId= req.params.productId
  const body = req.body


  if (body.message){
    console.log("inside if")
   return client.messages
  .create({ body:body.message, from: process.env.TWILIO_NUMBER, to: process.env.OTHER_NUMBER })
  .then(message => console.log(message.sid))

    .then(() => res.render('message', { productId, message: "Thanks you for contacting the seller. Your message has been sent."}));
  }
  res.send(`<h2>Please update all fields<h2><a href ="/">Back to Home</a>`)
// res.json({status:"ok"})

  });





// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure








module.exports = router;
