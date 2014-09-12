// Products-routes

'use strict';

var express = require('express');
var BulkPackage = require('../models/bulkpackage');

var bulkpackagesRouter = express.Router();

bulkpackagesRouter.use(function(req, res, next) {
	// Middleware if needed
	next();
});

// Returns: all bulkpackages in catalog
bulkpackagesRouter.get('/', function(req, res, next) {
	BulkPackage.find({}, function(err, bulkpackages){
		if (err) { throw err; }
		res.json(bulkpackages);
		next();
	});
});

module.exports.router = bulkpackagesRouter;