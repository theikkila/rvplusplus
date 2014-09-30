/*
* Transaction-model
* Stores all activity in RV
* - product buys and sells
* - store updates
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    type: String,
    user: String,
    amount: Number
});

module.exports = mongoose.model('Transaction', TransactionSchema);