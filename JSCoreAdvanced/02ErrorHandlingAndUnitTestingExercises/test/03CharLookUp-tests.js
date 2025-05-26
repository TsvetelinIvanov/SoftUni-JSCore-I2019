let expect = require('chai').expect;
let lookupChar = require('../03CharLookup').lookupChar;
//In Judge must be paste without this above
describe('lookupChar - returns a character by a given index in the string', function() {
    it('should return undefined with a non-string first parameter', function() {
        expect(lookupChar(13, 0)).to.equal(undefined, 'The function did not return the correct result!');
    });
    it('should return undefined with a non-number secnd parameter', function() {
        expect(lookupChar('pesho', 'gosho')).to.equal(undefined, 'The function did not return the correct result!');
    });
    it('should return undefined with a floating point number second parameter', function() {
        expect(lookupChar('pesho', 3.14)).to.equal(undefined, 'The function did not return the correct message!');
    });
    it('should return Incorrect index with an incorrect index value', function() {
        expect(lookupChar('pesho', 10)).to.equal('Incorrect index', 'The function did not return the correct value!');
    });
    it('should return Incorrect index with a negative index value', function() {
        expect(lookupChar('pesho', -1)).to.equal('Incorrect index', 'The function did not return the correct value!');
    });
    it('should return Incorrect index with an index value equal to string length', function() {
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index', 'The function did not return the correct value!');
    });
    it('should return correct value with correct parameters', function() {
        expect(lookupChar('pesho', 0)).to.equal('p', 'The function did not return the correct result!');
    });
    it('should return correct value with correct parameters', function() {
        expect(lookupChar('pesho', 3)).to.equal('h', 'The function did not return the correct result!');
    });
    it('should return correct value with correct parameters', function() {
        expect(lookupChar(' 123456789', 6)).to.equal('6', 'The function did not return the correct result!');
    });
});
