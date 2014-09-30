/*
* Client-model
* Stores all api-consuming clients
*/  
'use strict';

var mongoose = require('mongoose');
var hat = require('hat');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name: {type: String, required: true},
    created: {type: Date, default: Date.now, required: true },
    grantTypes: [String],
    clientId: {type: String, required: true, default: hat},
    secret: {type: String, required: true, default: hat}
});

module.exports = mongoose.model('Client', ClientSchema);