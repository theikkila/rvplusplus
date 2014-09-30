var expect = require('expect.js');
//var fs = require('fs');
var models = require('auto-loader').load(__dirname + '/../models');

describe('REST API', function(){
	describe('Without AccessToken', function(){
		it('should have access to read', function(){
			//expect(1).to.be(1);
		});
		it('should not have access to write anything', function(){
			//expect(1).to.be(1);
		});
	});
	describe('With AccessToken but normal permissions', function(){
		it('should have access to read', function(){
			//expect(1).to.be(1);
		});
		it('should be possible to buy products', function(){
			//expect(1).to.be(1);
		});
		it('should not be possible to modify products', function(){
			//expect(1).to.be(1);
		});
		it('should be possible to modify user personal information', function(){
			//expect(1).to.be(1);
		});
		it('should not be possible to see other users personal information', function(){
			//expect(1).to.be(1);
		});
	});
	describe('With AccessToken but keiju permissions', function(){
		it('should have access to read', function(){
			//expect(1).to.be(1);
		});
		it('should be possible to buy products', function(){
			//expect(1).to.be(1);
		});
		it('should be possible to modify products', function(){
			//expect(1).to.be(1);
		});
		it('should be possible to modify user personal information', function(){
			//expect(1).to.be(1);
		});
		it('should be possible to see other users personal information', function(){
			//expect(1).to.be(1);
		});
	});
});