// server.js
'use strict';
/*
* RVplusplus
*/


// Packages
var config = require('./config');
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose   = require('mongoose');
var baucis = require('baucis');
var Swagger = require('baucis-swagger');

var swagger = new Swagger(baucis);

// Models autoloader
var models = require('auto-loader').load(__dirname + '/models');

mongoose.connect(config.db.path); // connect to our database

// App configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = config.app.port || 3000;

// ROUTES


// Product REST-api
baucis.rest(models.product);
// Custom bulkpackage-api
require('./controllers/bulkpackages')(models, baucis);
// Custom user-api
require('./controllers/users')(models, baucis);
// Bind baucis to /api -path
app.use('/api', baucis());


// Enable swagger
swagger.finalize(app);

app.listen(port);
console.log('RVplusplus server is running on ' + port);
