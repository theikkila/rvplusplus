// Products-routes

'use strict';

var express = require('express');
var Product = require('../models/product');

var productsRouter = express.Router();

productsRouter.use(function(req, res, next) {
	// Middleware if needed
	next();
});

// Returns: all products in catalog
productsRouter.get('/', function(req, res, next) {
	Product.find({}, function(err, products){
		if (err) { throw err; }
		res.json(products);
		next();
	});
});

module.exports.router = productsRouter;