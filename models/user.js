/*
* User-model
* Stores all users
*/
'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true},
    created: {type: Date, default: Date.now, required: true },
    access: {type: Date, default: Date.now, required: true },
    active: {type: Boolean, default: true, required: true },
    permissions: [String],
    email: {type: String, required: true},
    username: {type: String, required: true},
    HYusername: {type: String, required: true},
    passwordHash: {type: String, required: true, default: "-"}
});

UserSchema.virtual('password')
    .get(function () {
        return this.passwordHash;
    })
    .set(function (plaintext) {
        var that = this;
        bcrypt.genSalt(10, function (err, salt) {
            if (err) { throw err; }
            bcrypt.hash(plaintext, salt, function (err, hash) {
                if (err) { throw err; }
                // Store hash in models password-field
                that.passwordHash = hash;
            });
        });
    });

UserSchema.methods.checkPassword = function (passwd, cb) {
    // Check if password is correct
    bcrypt.compare(passwd, this.passwordHash, cb);
};

module.exports = mongoose.model('User', UserSchema);