/*
* Product-model
*/

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true},
    created: {type: Date, default: Date.now, required: true},
    updated: {type: Date, default: Date.now, required: true},
    description: String,
    eanCodes: [String],
    count: {type: Number, required: true},
    flags: {
        unlimited: {type: Boolean, default: false}, // Product is unlimited, like coffee or can returns 
        cantbuy: {type: Boolean, default: false} // You can't buy this product, it is used for statistics purposes only (like coffee supplys)
    }
});

ProductSchema.pre('save', function (next) {
    this.updated = new Date();
    next();
});

module.exports = mongoose.model('Product', ProductSchema);