var expect = require('expect.js');
//var fs = require('fs');
var models = require('auto-loader').load(__dirname + '/../models');

describe('OAuth', function(){
	describe('Invalid client', function(){
		it('should not have access', function(){
			//expect(1).to.be(1);
		});
	});
	describe('Valid client', function(){
		it('should have access', function(){
			//expect(1).to.be(1);
		});
		it('should not authorize with wrong credientials', function(){

		});
		it('should authorize with valid credientials', function(){

		});
		it('should get AccessToken', function(){
			//expect(1).to.be(1);
		});

	});
});