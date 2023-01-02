const express = require('express');
const router  = express.Router();
const favoritesQueries = require('../db/queries/favorites');

router.post('/', function(req, res) {
  favoritesQueries.getFavorites()
  .then((favorite) => {
    res.json(favorite)
  })
  return res.rows
}

)





module.exports = router;
