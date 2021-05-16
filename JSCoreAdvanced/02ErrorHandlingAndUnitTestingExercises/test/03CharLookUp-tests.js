let expect = require('chai').expect;
let lookupChar = require('../03CharLookup').lookupChar;
//In Judge must be paste without this above
describe('lookupChar - returns a character by a given index in the string', function(){
    it('with a non-string first parameter, should return undefined', function(){
        expect(lookupChar(13, 0)).to.equal(undefined, 'The function did not return the correct result!');
    });
    it('with a non-number secnd parameter, should return undefined', function(){
        expect(lookupChar('pesho', 'gosho')).to.equal(undefined, 'The function did not return the correct result!');
    });
    it('with a floating point number second parameter, should return undefined', function(){
        expect(lookupChar('pesho', 3.14)).to.equal(undefined, 'The function did not return the correct message!');
    });
    it('with an incorrect index value, should return Incorrect index', function(){
        expect(lookupChar('pesho', 10)).to.equal('Incorrect index', 'The function did not return the correct value!');
    });
    it('with a negative index value, should return Incorrect index', function(){
        expect(lookupChar('pesho', -1)).to.equal('Incorrect index', 'The function did not return the correct value!');
    });
    it('with an index value equal to string length, should return Incorrect index', function(){
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index', 'The function did not return the correct value!');
    });
    it('with correct parameters, should return correct value', function(){
        expect(lookupChar('pesho', 0)).to.equal('p', 'The function did not return the correct result!');
    });
    it('with correct parameters, should return correct value', function(){
        expect(lookupChar('pesho', 3)).to.equal('h', 'The function did not return the correct result!');
    });
    it('with correct parameters, should return correct value', function(){
        expect(lookupChar(' 123456789', 6)).to.equal('6', 'The function did not return the correct result!');
    });
});