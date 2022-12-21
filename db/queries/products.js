const db = require('../connection');

const getProducts = () => {
  return db.query('SELECT * FROM products;')
    .then(res => {
      return res.rows;
    });


};

const getProductsbyId = (id) => {
  return db.query('SELECT * FROM products WHERE id = $1;'[id])
    .then(res => {
      return res.rows[0];
    });


};


module.exports = { getProducts, getProductsbyId };
