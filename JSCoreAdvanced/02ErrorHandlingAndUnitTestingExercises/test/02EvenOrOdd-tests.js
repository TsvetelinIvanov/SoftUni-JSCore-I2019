let expect = require('chai').expect;
let isOddOrEven = require('../02EvenOrOdd').isOddOrEven;
//In Judge must be paste without this above
describe('isOddOrEven - checks if string length is odd or even', function(){
    it('should return undefined for []', function(){
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('should return undefined for {}', function(){
        expect(isOddOrEven({})).to.be.undefined;
    });
    it('should return undefined for 10', function(){
        expect(isOddOrEven(10)).to.be.undefined;
    });
    it('should return undefined for NaN', function(){
        expect(isOddOrEven(NaN)).to.be.undefined;
    });
    it('should return undefined for new Date(2019-11-11)', function(){
        expect(isOddOrEven(new Date(2019-11-11))).to.be.undefined;
    });
    it('should return undefined for null', function(){
        expect(isOddOrEven(null)).to.be.undefined;
    });
    it('should return undefined for undefined', function(){
        expect(isOddOrEven(undefined)).to.be.undefined;
    });

    it('should return odd for a', function(){
        expect(isOddOrEven('a')).to.be.equal('odd');
    });
    it('should return odd for aba', function(){
        expect(isOddOrEven('aba')).to.be.equal('odd');
    });
    it('should return odd for abcde', function(){
        expect(isOddOrEven('abcde')).to.be.equal('odd');
    });
    it('should return odd for 1234567', function(){
        expect(isOddOrEven('1234567')).to.be.equal('odd');
    });
    it('should return odd for one space', function(){
        expect(isOddOrEven(' ')).to.be.equal('odd');
    });

    it('should return even for empty string', function(){
        expect(isOddOrEven('')).to.be.equal('even');
    });
    it('should return even for ab', function(){
        expect(isOddOrEven('ab')).to.be.equal('even');
    });
    it('should return even for abkl;p', function(){
        expect(isOddOrEven('abkl;p')).to.be.equal('even');
    });
    it('should return even for 1234567890', function(){
        expect(isOddOrEven('1234567890')).to.be.equal('even');
    });
    it('should return even for six spaces', function(){
        expect(isOddOrEven('      ')).to.be.equal('even');
    });
});