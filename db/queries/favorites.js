const db = require('../connection');



const getFavorites = () => {
  return db.query('SELECT * FROM favorites JOIN products ON product_id = products.id;')
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


const saveFavorite = (favorite) => {
  return db.query(`SELECT * FROM favorites`)
  .then((data) => {
    if (data.rows.length === 0){
      db.query(`INSERT INTO favorites(user_id, product_id) VALUES ($1, $2)RETURNING *`, [favorite.user, favorite.product])
    }else{
    for(let index of data.rows){
      if(index.user_id !== Number(favorite.user) || index.product_id !== Number(favorite.product)){
        db.query(`INSERT INTO favorites(user_id, product_id) VALUES ($1, $2)RETURNING *`, [favorite.user, favorite.product])
        break;
      }
    }
  }
    return data;
  }).then(() => {
    return getFavorites();
  }).then((result) => { return result; })
  // return db.query(`INSERT INTO favorites(user_id, product_id) VALUES ($1, $2)RETURNING *`, [favorite.user, favorite.product])
  //   .then(() => {
  //    return getFavorites();

  //   }).then((result) => { return result; })

};

module.exports = { getFavorites, getFavoritesbyId, saveFavorite };
