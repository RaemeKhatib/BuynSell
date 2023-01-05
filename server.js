// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersApiRoutes = require('./routes/users-api');
const usersRoutes = require('./routes/users');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/users-api', usersApiRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).



//import the routers
const productApi = require('./routes/products-api.js');
const messageApi = require('./routes/message-api.js');
const favApi = require('./routes/fav-api.js')
//use the routers
app.use('/products', productApi);
app.use('/message', messageApi);
app.use('/favorites', favApi);
app.get('/', (req, res) => { //THIS IS WHERE WE TURN OFF/ON ADMIN
  res.render('index',{isAdmin:false});
  // res.render('index',{isAdmin:true});
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
