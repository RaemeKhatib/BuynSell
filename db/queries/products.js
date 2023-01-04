const db = require('../connection');

const getProducts = () => {
  return db.query('SELECT * FROM products;')
    .then(res => {
      return res.rows;
    });


};

const getProductsbyId = (id) => {
  return db.query('SELECT * FROM products WHERE id = $1;', [id])
    .then(result => {
      return result.rows[0];
    });


};


const addProduct = (product) => {

  return db.query(`INSERT INTO products ( name, description, image_url, price, status) VALUES ($1, $2,$3,$4,$5  )RETURNING *;`, [product.productName, product.description, product.image_url, product.price, product.status])
  .then(result => {
    return result.rows[0];
  });
}


module.exports = { getProducts, getProductsbyId, addProduct };
