const express = require('express');
const router  = express.Router();
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
   return res.render('message', { productId, message: "Thanks you for contacting the seller. Your message has been sent." });
  }
  res.send(`<h1>Please update all fields<h1><a href ="/">Back to Home</a>`)
// res.json({status:"ok"})

  });






module.exports = router;
