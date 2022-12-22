const express = require('express');
const router  = express.Router();
const OrderQueries = require('../db/queries/orders');

//get /products

router.get('/', (req, res) => {
OrderQueries.getOrders()
.then((orders) => {
  res.json(orders)
});

});








//get /products/:id


router.get('/:id', (req, res) => {
 OrderQueries.getOrdersbyId(req.params.id)
  .then((order) => {
    res.json(order)
  });
});
