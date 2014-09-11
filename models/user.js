/*
* User-model
* Stores all users
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	username: String,
	HYAccount: String,
	password: String
});

module.exports = mongoose.model('User', UserSchema);