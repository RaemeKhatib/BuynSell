const db = require('../connection');



const getFavorites = () => {
  return db.query('SELECT * FROM favorites;')
    .then(res => {
      return res.rows;
    });


};

const getFavoritesbyId = (id) => {
  return db.query('SELECT * FROM favorites WHERE id = $1;', [id])
    .then(result => {
      return result.rows[0];
    });


};


module.exports = { getFavorites, getFavoritesbyId };
