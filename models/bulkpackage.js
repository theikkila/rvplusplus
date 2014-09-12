/*
* Product-model
*/

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BulkPackageSchema = new Schema({
	created: {type: Date, default: Date.now},
	name: String,
	description: String,
	eanCode: String,
	product: {type: Schema.ObjectId, ref: 'Product'},
	count: Number
});

BulkPackageSchema.methods.addProducts = function () {
	// appends bulk-loads of products to store
	this.populate('product', function (err, bulkpackage) {
		if (err) { throw err; }
		bulkpackage.product.count += bulkpackage.count;
		bulkpackage.save(function(err, bulkpackage){
			if (err) { throw err; }
			return bulkpackage.product;
		});
	});
};

module.exports = mongoose.model('BulkPackage', BulkPackageSchema);