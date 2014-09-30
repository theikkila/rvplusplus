var expect = require('expect.js');
//var fs = require('fs');
var request = require('superagent');
var models = require('auto-loader').load(__dirname + '/../models');
var mongoose = require('mongoose');
var config = require('../config');


var host = config.app.protocol + '://' + config.app.host + ':' + config.app.port;

mongoose.connect(config.db.path); // connect to our database

describe('OAuth', function(){
    var client = null;
    var wrongClient = "Basic d3JvbmdjbGllbnRpZDp3cm9uZ2NsaWVudHNlY3JldA==";
    var validClient = "Basic ";
    var access_token = "";
    // Create test-user
    before(function(done){
        var user = new models.user({name: "TestUser", username: "testuser", email: "test@test.com", HYusername: "testuser", password: "testpassword"});
        user.save(done);
    });

    // create testclient
    before(function(done){
        // create new client        
        var c = new models.client({name:"TestClient", grantTypes: ["password"]});
        c.save(function(err, savedClient){
            client = savedClient;
            validClient += new Buffer(savedClient.clientId + ":" + savedClient.secret).toString('base64');
            done();
        });
    });

    describe('Invalid client', function(){
        it('should not have access', function(done){
            request
            .post(host + '/oauth/token')
            .type('form')
            .send({grant_type: "password", username: "testuser", password: "testpassword"})
            .set('Authorization', wrongClient)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .end(function(res){
                expect(res.statusCode).to.be(400);
                expect(res.body.error).to.be("invalid_client");
                done();
            });
        });
    });
    describe('Valid client', function(){
        it('should have access and authorize with valid credientials', function(done){
            request
            .post(host + '/oauth/token')
            .type('form')
            .send({grant_type: "password", username: "testuser", password: "testpassword"})
            .set('Authorization', validClient)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .end(function(res){
                expect(res.statusCode).to.be(200);
                access_token = res.body.access_token;
                expect(res.body.token_type).to.be("bearer");
                done();
            });
        });
        it('should not authorize with wrong credientials', function(done){
            request
            .post(host + '/oauth/token')
            .type('form')
            .send({grant_type: "password", username: "testuser", password: "wrongpassword"})
            .set('Authorization', validClient)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .end(function(res){
                expect(res.statusCode).to.be(400);
                expect(res.body.error).to.be("invalid_grant");
                done();
            });
        });
    });
    after(function(done){
        models.user.remove({username:"testuser"}).exec();
        //console.log(q);
        models.client.remove(client).exec();
        models.accesstoken.remove({token:access_token}).exec();
        done();
    });
});