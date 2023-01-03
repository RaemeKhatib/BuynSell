const express = require('express');
const router  = express.Router();
const OrderQueries = require('../db/queries/orders');

//get /products

router.get('/:productId', (req, res) => {
  const productId= req.params.productId
console.log("+++++++", productId)
// OrderQueries.getOrders()
// .then((orders) => {
//   res.json(orders)
// });
  res.render('message', { productId, message: "" });
});




router.post('/:productd', (req, res) => {
  const productId= req.params.productId
  // OrderQueries.getOrders()
  // .then((orders) => {
  //   res.json(orders)
  // });
  console.log("-------", productId, req.body)
  res.render('message', { productId, message: "message sent to seller" });
  });




//get /products/:id


// router.get('/:id', (req, res) => {
//  OrderQueries.getOrdersbyId(req.params.id)
//   .then((order) => {
//     res.json(order)
//   });
// });

module.exports = router;
