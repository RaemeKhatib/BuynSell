const express = require('express');
const router = express.Router();
const ProductQueries = require('../db/queries/products');

//get /products

router.get('/', (req, res) => {
  return ProductQueries.getProducts()
    .then((products) => {
      return res.json(products);
    });

});




//get /products/:id


router.get('/:id', (req, res) => {
  ProductQueries.getProductsbyId(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

router.post('/', (req, res) => {
  ProductQueries.addProduct(req.body.product)
    .then((product) => {
      console.log(product);
      res.send("Your product has been added.");

    })


});


router.post('/:id/delete', (req, res) => {
  ProductQueries.deleteProduct(req.params.id)
    .then((product) => {
      console.log(product);
      res.redirect('/');
    });

});

router.post('/:id', (req, res) => {
  const productDetails = {
    status: req.body.status
  };
  ProductQueries.updateProduct(req.params.id, productDetails)
    .then((product) => {
      console.log(product);
      res.redirect('/');
    });

});






module.exports = router;
