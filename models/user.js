/*
* User-model
* Stores all users
*/
'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	created: {type: Date, default: Date.now },
	access: {type: Date, default: Date.now },
	active: {type: Boolean, default: true },
	permissions: [String],
	email: String,
	username: String,
	HYusername: String,
	password: String
});


UserSchema.methods.setPassword = function (passwd) {
	// set password
	var that = this;
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(passwd, salt, function(err, hash) {
			if (err) { throw err; }
			// Store hash in models password-field
			that.password = hash;
		});
	});
};

UserSchema.methods.checkPassword = function (passwd, cb) {
	// Check if password is correct
	bcrypt.compare(passwd, this.password, cb);
};

module.exports = mongoose.model('User', UserSchema);