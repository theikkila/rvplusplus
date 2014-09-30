/*
* AccessToken-model
* Stores all AccessTokens
*/  
'use strict';

var mongoose = require('mongoose');
var hat = require('hat');
var Schema = mongoose.Schema;

var AccessTokenSchema = new Schema({
    userId: {type: Schema.ObjectId, ref: 'User', required: true},
    created: {type: Date, default: Date.now, required: true },
    clientId: {type: String, required: true},
    token: {type: String, required: true, default: hat},
    expires: {type: Date, default: null}
});

module.exports = mongoose.model('AccessToken', AccessTokenSchema);