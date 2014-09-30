
module.exports = function (models) {
	return {
		getAccessToken: function (bearerToken, cb) {
			models.accesstoken.findOne({token:bearerToken}, cb);
		},
		getClient: function (clientId, clientSecret, cb) {
			models.client.findOne({clientId:clientId, secret:clientSecret}, cb);
		},
		grantTypeAllowed: function (clientId, grantType, cb) {
			models.client.findOne({clientId:clientId}, function (err, client) {
				if (err) { cb(err); }
				cb(null, include(client.grantTypes, grantType));
			});
		},
		saveAccessToken: function (accessToken, clientId, expires, user, cb) {
			var t = new models.accesstoken({token: accessToken, clientId: clientId, expires: expires, userId: user});
			t.save(cb);
		},
		getAuthCode: function (authCode, cb) { cb(); },
		saveAuthCode: function (authCode, clientId, expires, user, cb) { cb(); },
		getUser: function (username, password, cb) {
			models.user.findOne({username:username}, function(err, user){
				if(err){ cb(err); }
				if(user.checkPassword(password, function(correct){
					console.log(correct);
					if(correct == true) return cb(null, user);
					return cb(null);
				}));
			});
		}
	}	
}


function include(arr,obj) {
    return (arr.indexOf(obj) != -1);
}