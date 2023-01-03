const express = require('express');
const router = express.Router();
const favoritesQueries = require('../db/queries/favorites');

router.get('/', function(req, res) {
  favoritesQueries.getFavorites()
    .then((favorite) => {
      res.json(favorite);
    });

});


router.post('/', function(req, res) {
  favoritesQueries.saveFavorite(req.body.favorite)
    .then((favorite) => {
      console.log(favorite);
      res.json(favorite);
    });

});




module.exports = router;
