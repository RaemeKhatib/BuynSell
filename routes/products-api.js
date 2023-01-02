const express = require('express');
const router  = express.Router();
const ProductQueries = require('../db/queries/products');

//get /products

router.get('/', (req, res) => {
 return ProductQueries.getProducts()
  .then((products) => {
  return res.json(products)
});

});




//get /products/:id


router.get('/:id', (req, res) => {
  ProductQueries.getProductsbyId(req.params.id)
  .then((product) => {
    res.json(product)
  });
});









module.exports = router;
