/*
* Product-model
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: String,
	created: {type: Date, default: Date.now},
	description: String,
	eanCode: String,
	count: Number,
	flags: {
		unlimited: {type: Boolean, default: false},
		cantbuy: {type: Boolean, default: true}
	}
});

module.exports = mongoose.model('Product', ProductSchema);