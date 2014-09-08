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
var mongoose   = require('mongoose');
mongoose.connect(config.db.path); // connect to our database

// models
var User = require('./models/user');
var Product = require('./models/product');
var Transaction = require('./models/transaction');

// App configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = config.app.port || 3000;

// ROUTES

var apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/', function (req, res){
	res.json({ server: 'RVplusplus' });
});


app.listen(port);
console.log('RVplusplus server is running on ' + port);
