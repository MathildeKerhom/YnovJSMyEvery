var expect = require('chai').expect;

var every = require('../index').every;

describe('every', function() {
	it('should be true', function() {
		expect(every()).to.be.true;
	});
});