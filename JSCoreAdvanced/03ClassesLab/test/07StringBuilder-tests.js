let expect = require('chai').expect;
let StringBuilder = require('../07StringBuilder').StringBuilder;
//In Judge must be paste without this above
describe('StringBuilder', function() {
    let builder;

    it('empty initialization should not throw', function() {
        let emptyStringBuilderInitialization = () => builder = new StringBuilder();
        expect(emptyStringBuilderInitialization).to.not.throw();
    });
    it('initialization with parameters should not throw', function() {
        let stringBuilderInitializationWithPrameters = () => builder = new StringBuilder('Parameter');
        expect(stringBuilderInitializationWithPrameters).to.not.throw();
    });
    it('should throw with invalid constructor parameter', function() {
        let initializationWithInvalidConstructorParameter = () => builder = new StringBuilder(8);
        expect(initializationWithInvalidConstructorParameter).to.throw();
    });

    describe('StringBuilder initialization with empty constructor', function() {
        beforeEach(function() {
            builder = new StringBuilder();
        });

        it('should has all properties', function() {
            expect(builder.hasOwnProperty('_stringArray')).to.equal(true, 'Missing _stringArray property!');
        });
        it('should has all functions attached to prototype', function() {
            expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.equal(true, 'Missing append function!');
            expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.equal(true, 'Missing prepend function!');
            expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.equal(true, 'Missing insertAt function!');
            expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.equal(true, 'Missing remove function!');
            expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.equal(true, 'Missing toString function!');
        });
        it('should initialize data to an empty array', function() {
            expect(builder._stringArray instanceof Array).to.equal(true, 'Data must be of type array!');
            expect(builder._stringArray.length).to.equal(0, 'Data array must be initialized empty!');
        });
    });

    describe('StringBuilber initialization with constructor with parameters', function() {
        beforeEach(function() {
            let startString = 'Parameter';
            builder = new StringBuilder(startString);
        });

        it('should initialize data to a string array', function() {
            expect(builder._stringArray instanceof Array).to.equal(true, 'Data must be of type array!');
            let expectedArray = Array.from('Parameter');
            compareArray(builder._stringArray, expectedArray);
        });
        it('should append correctly', function() {
            let expectedArray = Array.from('Parameter End');
            builder.append(' End');
            compareArray(builder._stringArray, expectedArray);
        });
        it('should prepend correctly', function() {
            let expectedArray = Array.from('Start Parameter');
            builder.prepend('Start ');
            compareArray(builder._stringArray, expectedArray);
        });
        it('should insertAt given index correctly', function() {
            let expectedArray = Array.from('Param inserted eter');
            builder.insertAt(' inserted ', 5);
            compareArray(builder._stringArray, expectedArray);
        });
        it('should remove correctly', function() {
            let expectedArray = Array.from('Parer');
            builder.remove(3, 4);
            compareArray(builder._stringArray, expectedArray);
        });
        it('should toString correctly', function() {
            let expectedString = 'Parameter';                       
            expect(builder.toString()).to.equal(expectedString);
        });
        
        it('should throw by invalid append parameter', function() {
            let thrown = () => builder.append(8);
            expect(thrown).to.throw();
        });
        it('should throw by invalid prepend parameter', function() {
            let thrown = () => builder.prepend(8);
            expect(thrown).to.throw();
        });
        it('should throw by invalid insertAt parameter', function() {
            let thrown = () => builder.insertAt(8, 10);
            expect(thrown).to.throw();
        });

        function compareArray(source, expected) {
            expect(source.length).to.equal(expected.length, 'Arrays do not match!');
            for (let i = 0; i < source.length; i++) {
                expect(source[i]).to.equal(expected[i], `Element ${source[i]} at index ${i} mismatch with expected element ${expected[i]}!`);
            }
        }
    });    
});
