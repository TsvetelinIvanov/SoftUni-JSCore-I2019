let expect = require('chai').expect;
let createCalculator = require('../07AddSubtract').createCalculator;
//In Judge must be paste without this above
describe('createCalculator() - adds and substracts numbers', function() {
    let calculator;
    beforeEach(function() {
        calculator = createCalculator();
    });
    
    it('should return 0 for get()', function() {
        let value = calculator.get();
        expect(value).to.be.equal(0);
    });
    it('should return 7 for add(7)', function() {
        calculator.add(7);
        let value = calculator.get();
        expect(value).to.be.equal(7);
    });
    it('should return 17 for add(7), add(9) and add(1)', function() {
        calculator.add(7);
        calculator.add(9);
        calculator.add(1);
        let value = calculator.get();
        expect(value).to.be.equal(17);
    });
    it('should return 8 for add(16), add(-9) and add(1)', function() {
        calculator.add(16);
        calculator.add(-9);
        calculator.add(1);
        let value = calculator.get();
        expect(value).to.be.equal(8);
    });
    it('should return 12.8 for add(1.7), add(10.1) and add(1)', function() {
        calculator.add(1.7);
        calculator.add(10.1);
        calculator.add(1);
        let value = calculator.get();
        expect(value).to.be.closeTo(12.8, 0.1);
    });
    
    it('should return -7 for subtract(7)', function() {
        calculator.subtract(7);        
        let value = calculator.get();
        expect(value).to.be.equal(-7);
    });
    it('should return -17 for subtract(7), subtract(9) and subtract(1)', function() {
        calculator.subtract(7);
        calculator.subtract(9);
        calculator.subtract(1);
        let value = calculator.get();
        expect(value).to.be.equal(-17);
    });
    it('should return -8 for subtract(16), subtract(-9) and subtract(1)', function() {
        calculator.subtract(16);
        calculator.subtract(-9);
        calculator.subtract(1);
        let value = calculator.get();
        expect(value).to.be.equal(-8);
    });
    it('should return -1.7 for subtract(0.7), subtract(0.5) and subtract(0.5)', function() {
        calculator.subtract(0.7);
        calculator.subtract(0.5);
        calculator.subtract(0.5);
        let value = calculator.get();
        expect(value).to.be.closeTo(-1.7, 0.1);
    });
    
    it('should return 8 for add(7), subtract(9) and add(10)', function() {
        calculator.add(7);
        calculator.subtract(9);
        calculator.add(10);
        let value = calculator.get();
        expect(value).to.be.equal(8);
    });
    it('should return 0 for add(0), subtract(0) and add(0)', function() {
        calculator.add(0);
        calculator.subtract(0);
        calculator.add(0);
        let value = calculator.get();
        expect(value).to.be.equal(0);
    });
    it('should return 1 for add(1), subtract(0) and add(0)', function() {
        calculator.add(1);
        calculator.subtract(0);
        calculator.add(0);
        let value = calculator.get();
        expect(value).to.be.equal(1);
    });
    it('should return 8 for add("10"), subtract("8") and add("6")', function() {
        calculator.add("10");
        calculator.subtract("8");
        calculator.add("6");
        let value = calculator.get();
        expect(value).to.be.equal(8);
    });
    it('should return 8 for add(10), subtract("8") and add("6")', function() {
        calculator.add(10);
        calculator.subtract("8");
        calculator.add("6");
        let value = calculator.get();
        expect(value).to.be.equal(8);
    });
    
    it('should return NaN for add(string)', function() {
        calculator.add('hi');
        let value = calculator.get();
        expect(value).to.be.NaN;
    });
    it('should return NaN for subtract(string)', function() {
        calculator.subtract('hi');
        let value = calculator.get();
        expect(value).to.be.NaN;
    });
});
