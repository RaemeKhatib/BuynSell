const db = require('../connection');

/**
 * Get all products.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the products.
 */
getAllProducts = function(options, limit=10){

const queryParams = [];

let queryString = `SELECT products.*
FROM products`;
if(options.Mininmum_price && options.Maximum_price){
  queryParams.push(options.Minimum_price);
  queryParams.push(options.Maximum_price);
  queryString += `WHERE price >= CAD${queryParams.length - 1} AND
  price <= CAD${queryParams.length}`;
}

queryParams.push(limit);
  queryString += `ORDER BY price
    LIMIT CAD${queryParams.length}
    `;

    return db.query(queryString, queryParams).then((res) => res.rows);
};

module.exports = { getAllProducts };
