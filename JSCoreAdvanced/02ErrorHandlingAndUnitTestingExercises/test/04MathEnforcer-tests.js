let expect = require('chai').expect;
let assert = require('chai').assert;
let mathEnforcer = require('../04MathEnforcer').mathEnforcer;
//In Judge must be paste without this above
describe('mathEnforcer - adds 5, subtracts 10 or sums', function(){
    it('should have addFive, subtractTen, sum', function(){
        let mathEnforcerKeys = Object.keys(mathEnforcer).join(', ');
        let expectedMathEnforcerKeys = 'addFive, subtractTen, sum';
        assert.equal(mathEnforcerKeys, expectedMathEnforcerKeys)
    });

    describe('addFive - adds 5 to a given number', function(){
        it('should return 5 for 0', function(){
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
        });
        it('should return 10 for 5', function(){
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('should return 1000005 for 1000000', function(){
            expect(mathEnforcer.addFive(1000000)).to.be.equal(1000005);
        });
        it('should return -5 for -10', function(){
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        });
        it('should return 0 for -5', function(){
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it('should return 10.18 for 5.18', function(){
            expect(mathEnforcer.addFive(5.18)).to.be.closeTo(10.18, 0.01);
        });
        
        it('should return undefined for abc', function(){
            expect(mathEnforcer.addFive("abc")).to.be.undefined;
        });
        it('should return undefined for "1"', function(){
            expect(mathEnforcer.addFive("1")).to.be.undefined;
        });
        it('should return undefined for []', function(){
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });
        it('should return undefined for {}', function(){
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
        it('should return undefined for new Date(2019, 10, 10)', function(){
            expect(mathEnforcer.addFive(new Date(2019, 10, 10))).to.be.undefined;
        });
        it('should return undefined for null', function(){
            expect(mathEnforcer.addFive(null)).to.be.undefined;
        });
        it('should return undefined for undefined', function(){
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        });
        it('should return undefined for true', function(){
            expect(mathEnforcer.addFive(true)).to.be.undefined;
        });
        it('should return NaN for NaN', function(){
            expect(mathEnforcer.addFive(NaN)).to.be.NaN;
        });        
    });

    describe('subtractTen - subtracts 10 from a given number', function(){
        it('should return -10 for 0', function(){
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
        });
        it('should return 0 for 10', function(){
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        it('should return -5 for 5', function(){
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        });
        it('should return 5 for 15', function(){
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        });
        it('should return -15 for -5', function(){
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it('should return 1.7 for 11.7', function(){
            expect(mathEnforcer.subtractTen(11.7)).to.be.closeTo(1.7, 0.01);
        });

        it('should return undefined for abc', function(){
            expect(mathEnforcer.subtractTen("abc")).to.be.undefined;
        });
        it('should return undefined for "1"', function(){
            expect(mathEnforcer.subtractTen("1")).to.be.undefined;
        });
        it('should return undefined for []', function(){
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });
        it('should return undefined for {}', function(){
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
        it('should return undefined for new Date(2019, 10, 10)', function(){
            expect(mathEnforcer.subtractTen(new Date(2019, 10, 10))).to.be.undefined;
        });
        it('should return undefined for null', function(){
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
        });
        it('should return undefined for undefined', function(){
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        });
        it('should return undefined for true', function(){
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
        });
        it('should return NaN for NaN', function(){
            expect(mathEnforcer.subtractTen(NaN)).to.be.NaN;
        });
    });

    describe('sum - sums two given numbers', function(){
        it('should return 0 for (0, 0)', function(){
            expect(mathEnforcer.sum(0, 0)).to.be.equal(0);
        });
        it('should return 10 for (0, 10)', function(){
            expect(mathEnforcer.sum(0, 10)).to.be.equal(10);
        });
        it('should return -10 for (-10, 0)', function(){
            expect(mathEnforcer.sum(-10, 0)).to.be.equal(-10);
        });
        it('should return 100015 for (100000, 15)', function(){
            expect(mathEnforcer.sum(100000, 15)).to.be.equal(100015);
        });
        it('should return 19 for (30, -11)', function(){
            expect(mathEnforcer.sum(30, -11)).to.be.equal(19);
        });
        it('should return -41 for (-30, -11)', function(){
            expect(mathEnforcer.sum(-30, -11)).to.be.equal(-41);
        });
        it('should return 1.9 for (0.8, 1.1)', function(){
            expect(mathEnforcer.sum(0.8, 1.1)).to.be.closeTo(1.9, 0.01);
        });
        it('should return -0.1 for (-0.01, -0.09)', function(){
            expect(mathEnforcer.sum(-0.01, -0.09)).to.be.closeTo(-0.1, 0.01);
        });

        it('should return undefined for ("abc", 10)', function(){
            expect(mathEnforcer.sum("abc", 10)).to.be.undefined;
        });
        it('should return undefined for (10, "abc")', function(){
            expect(mathEnforcer.sum(10, "abc")).to.be.undefined;
        });
        it('should return undefined for ("1", 10)', function(){
            expect(mathEnforcer.sum("1", 10)).to.be.undefined;
        });
        it('should return undefined for (10, "1")', function(){
            expect(mathEnforcer.sum(10, "1")).to.be.undefined;
        });
        it('should return undefined for ([], 10)', function(){
            expect(mathEnforcer.sum([], 10)).to.be.undefined;
        });
        it('should return undefined for (10, [])', function(){
            expect(mathEnforcer.sum(10, [])).to.be.undefined;
        });
        it('should return undefined for ({}, 10)', function(){
            expect(mathEnforcer.sum({}, 10)).to.be.undefined;
        });
        it('should return undefined for (10, {})', function(){
            expect(mathEnforcer.sum(10, {})).to.be.undefined;
        });
        it('should return undefined for (new Date(2019, 10, 10), 10)', function(){
            expect(mathEnforcer.sum(new Date(2019, 10, 10), 10)).to.be.undefined;
        });
        it('should return undefined for (10, new Date(2019, 10, 10))', function(){
            expect(mathEnforcer.sum(10, new Date(2019, 10, 10))).to.be.undefined;
        });
        it('should return undefined for (null, 10)', function(){
            expect(mathEnforcer.sum(null, 10)).to.be.undefined;
        });
        it('should return undefined for (10, null)', function(){
            expect(mathEnforcer.sum(10, null)).to.be.undefined;
        });
        it('should return undefined for (undefined, 10)', function(){
            expect(mathEnforcer.sum(undefined, 10)).to.be.undefined;
        });
        it('should return undefined for (10, undefined)', function(){
            expect(mathEnforcer.sum(10, undefined)).to.be.undefined;
        });
        it('should return undefined for (true, 10)', function(){
            expect(mathEnforcer.sum(true, 10)).to.be.undefined;
        });
        it('should return undefined for (10, true)', function(){
            expect(mathEnforcer.sum(10, true)).to.be.undefined;
        });
        it('should return NaN for (NaN, 10)', function(){
            expect(mathEnforcer.sum(NaN, 10)).to.be.NaN;
        });
        it('should return NaN for (10, NaN)', function(){
            expect(mathEnforcer.sum(10, NaN)).to.be.NaN;
        });        
    });
});