let expect = require('chai').expect;
let sum = require('../04SumOfNumbers.js').sum;
//In Judge must be paste without this above
describe('sum(arr) - sum array of numbers', function() {
    it('should return 3 for [1, 2]', function() {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it('should return 100101 for [1, 100000, 100]', function(){
        expect(sum([1, 100000, 100])).to.be.equal(100101);
    });
    it('should return -7 for [10, 0, -17]', function(){
        expect(sum([10, 0, -17])).to.be.equal(-7);
    });
    it('should return 1.7 for [1, 0, 0.7]', function(){
        expect(sum([1, 0, 0.7])).to.be.equal(1.7);
    });
    it('should return 10 for [10]', function(){
        expect(sum([10])).to.be.equal(10);
    });
    it('should return 0 for empty array', function(){
        expect(sum([])).to.be.equal(0);
    });
    it('should return NaN for invalid data', function(){
        expect(sum(['invalid data'])).to.be.NaN;
    });
    it('should return NaN for not array', function(){
        expect(sum('invalid data')).to.be.NaN;
    });
});