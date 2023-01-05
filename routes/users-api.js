/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');


router.get('/', (req, res) => {
  // THIS IS WHERE WE CAN SWITCH BETWEEN USER AND ADMIN joy@toworld.ca is admin
  // userQueries.getUserByEmail("joy@toworld.ca")
  userQueries.getUserByEmail("kira@myworld.ca")
    .then(user => {
      res.json({ user });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});



module.exports = router;
