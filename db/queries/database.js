const db = require('../connection');

/**
 * Get all products.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the products.
 */
getAllProducts = async function(options, limit = 10){

const queryParams = [];

let queryString = `SELECT products.*
FROM products`;
if(options.Mininmum_price && options.Maximum_price){
  queryParams.push(options.Minimum_price);
  queryParams.push(options.Maximum_price);
  queryString += `WHERE price >= ${queryParams.length - 1} AND
  price <= ${queryParams.length}`;
}

queryParams.push(limit);
  queryString += `ORDER BY price
    LIMIT ${queryParams.length}
    `;

    const res = await db.query(queryString, queryParams);
  return res.rows;
};

module.exports = { getAllProducts };
