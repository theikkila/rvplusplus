/*
* Product-model
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: String,
	abstract: Boolean,
	description: String,
	eanCode: String
});

module.exports = mongoose.model('Product', ProductSchema);