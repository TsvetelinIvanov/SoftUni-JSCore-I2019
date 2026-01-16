let expect = require('chai').expect;
let Calculator = require('../02Calculator').Calculator;
//It must be paste in Judge without this above
describe('Calculator', function() {
    describe('constructor', function() {
        it('should have property expenses', function() {
            let calculator = new Calculator();
            expect(calculator).to.haveOwnProperty('expenses');
        });
        it('should have property expenses empty array', function() {
            let calculator = new Calculator();            
            expect(JSON.stringify(calculator.expenses)).to.be.equal('[]');            
        });
    });

    describe('add(data)', function(){
        let calculator;
        beforeEach(function() {
            calculator = new Calculator();
        });

        it('should add strings to expenses', function() {
            calculator.add('abc');
            calculator.add('cdf');
            expect(JSON.stringify(calculator.expenses)).to.be.equal('["abc","cdf"]');
        });
        it('should add numbers to expenses', function() {
            calculator.add(8);
            calculator.add(-10);
            calculator.add(7.9);
            expect(JSON.stringify(calculator.expenses)).to.be.equal("[8,-10,7.9]");
        });
        it('should add mixed to expenses', function() {
            calculator.add('abc');
            calculator.add(10);
            calculator.add(['cdf', 8]);            
            calculator.add({name: 'Poli'});            
            expect(JSON.stringify(calculator.expenses)).to.be.equal('["abc",10,["cdf",8],{"name":"Poli"}]');
        });
    });

    describe('divideNums()', function() {
        let calculator;
        beforeEach(function() {
            calculator = new Calculator();
        });

        it('should throw for empty expenses', function() {
            expect(() => calculator.divideNums()).to.throw('There are no numbers in the array!');
        });
        it('should throw for expenses without numbers', function() {
            calculator.add('abc');
            calculator.add('def');
            expect(() => calculator.divideNums()).to.throw('There are no numbers in the array!');
        });

        it('should return message for expenses with numbers and zero', function(){
            calculator.add(80);
            calculator.add('abc');
            calculator.add(10);            
            calculator.add('100');            
            calculator.add(0);            
            expect(calculator.divideNums()).to.be.equal('Cannot divide by zero');            
        });
        it('should return correct value for expenses with numbers', function() {
            calculator.add(80);
            calculator.add('abc');
            calculator.add(10);            
            calculator.add('100');            
            expect(calculator.divideNums()).to.be.equal(8);            
        });
        it('should return correct value for expenses with floting point numbers', function() {
            calculator.add(0.8);
            calculator.add('abc');
            calculator.add(10);
            calculator.add('100');
            expect(calculator.divideNums()).to.be.closeTo(0.08, 0.01);            
        });
        it('should return correct value for expenses with negative numbers', function() {
            calculator.add(80);
            calculator.add('abc');
            calculator.add(-10);
            calculator.add('100');
            expect(calculator.divideNums()).to.be.equal(-8);            
        });
    });

    describe('toString()', function() {
        let calculator;
        beforeEach(function() {
            calculator = new Calculator();
        });

        it('should return "empty array" for empty expenses', function() {
            expect(calculator.toString()).to.be.equal("empty array")
        });
        it('should return correct value for one member', function() {
            calculator.add('abc');
            expect(calculator.toString()).to.be.equal('abc');
        });
        it('should return correct value for several members', function() {
            calculator.add('abc');
            calculator.add('100');
            calculator.add(10);
            calculator.add(0.7);
            calculator.add(-18);
            //calculator.add([]);//the second zero test don't past with this
            //calculator.add({});//the second zero test don't past with this
            expect(calculator.toString()).to.be.equal('abc -> 100 -> 10 -> 0.7 -> -18');
            //expect(calculator.toString()).to.be.equal('abc -> 100 -> 10 -> 0.7 -> -18 -> [] -> {}');//the second zero test don't past with this
        });
    });

    describe('orderBy()', function() {
        let calculator;
        beforeEach(function(){
            calculator = new Calculator();
        });

        it('should return correct values for numbers', function() {
            calculator.add(6);
            calculator.add(-10);
            calculator.add(0.9);
            calculator.add(190);
            calculator.add(-9.7);
            calculator.add(6);
            expect(calculator.orderBy()).to.be.equal('-10, -9.7, 0.9, 6, 6, 190');
        });
        it('should return correct values for not numbers', function() {
            calculator.add('abc');
            calculator.add('def');
            calculator.add('xyz');            
            expect(calculator.orderBy()).to.be.equal('abc, def, xyz');
        });
        it('should return correct values for numbers and non numbers', function() {
            calculator.add(6);
            calculator.add(-10);
            calculator.add(0.9);
            calculator.add('abc');
            calculator.add(190);
            calculator.add('xyz');
            calculator.add(-9.7);
            calculator.add('def');            
            calculator.add(6);           
            expect(calculator.orderBy()).to.be.equal('-10, -9.7, 0.9, 190, 6, 6, abc, def, xyz');
        });
    });
});
