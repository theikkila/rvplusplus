// Products-routes

'use strict';

var express = require('express');
var User = require('../models/user');

var usersRouter = express.Router();

usersRouter.use(function(req, res, next) {
	// Middleware if needed
	next();
});

// Returns: all users
usersRouter.get('/', function(req, res, next) {
	User.find({}, function(err, users){
		if (err) { throw err; }
		res.json(users);
		next();
	});
});

module.exports.router = usersRouter;