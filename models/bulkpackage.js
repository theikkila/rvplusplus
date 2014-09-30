/*
* Product-model
*/

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BulkPackageSchema = new Schema({
    created: {type: Date, default: Date.now, required: true},
    name: {type: String, required: true},
    description: String,
    eanCodes: [String],
    product: {type: Schema.ObjectId, ref: 'Product', required: true},
    count: {type: Number, required: true}
});

BulkPackageSchema.methods.addProducts = function (cb) {
    // appends bulk-loads of products to store
    this.populate('product', function (err, bulkpackage) {
        if (err) { throw err; }
        bulkpackage.product.count += bulkpackage.count;
        bulkpackage.product.save(function (err, product) {
            if (err) { throw err; }
            return cb(product);
        });
    });
};

module.exports = mongoose.model('BulkPackage', BulkPackageSchema);