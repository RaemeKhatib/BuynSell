const db = require('../connection');

const getOrders = () => {
  return db.query('SELECT * FROM orders;')
    .then(res => {
      return res.rows;
    });


};

const getOrdersbyId = (id) => {
  return db.query('SELECT * FROM orders WHERE id = $1;', [id])
    .then(result => {
      return result.rows[0];
    });


};


module.exports = { getOrders, getOrdersbyId };
