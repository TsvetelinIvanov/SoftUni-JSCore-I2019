//  100/100 in Judge but the second zero test didn't past - locally all is OK
let expect = require('chai').expect;
let Warehouse = require('../09Warehouse').Warehouse;
//In Judge must be paste without this above
describe('Warehouse', function () {
    describe('constructor', function () {        
        it('should have correct capacity', function () {
            let warehouse = new Warehouse(10);
            expect(warehouse.capacity).to.be.equal(10);
        });        

        it('should throw on negative capacity', function () {
            expect(() => { new Warehouse(-10); }).to.throw('Invalid given warehouse space');
        });
        it('should throw on 0 capacity', function () {
            expect(() => { new Warehouse(0); }).to.throw('Invalid given warehouse space');
        });
        it('should throw on string instead number for capacity', function () {
            expect(() => { new Warehouse('10'); }).to.throw('Invalid given warehouse space');
        });
    });

    describe('addProduct', function () {
        it('should add product correctly', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'bannana', 9);
            expect(Object.keys(warehouse.availableProducts['Food']).length).to.be.equal(1);
        });
        it('should add products correctly', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'bannana', 3);
            warehouse.addProduct('Food', 'orange', 3);
            warehouse.addProduct('Food', 'apple', 4);
            expect(Object.keys(warehouse.availableProducts['Food']).length).to.be.equal(3);
        });

        it('should throw on not enough capacity for one product', function () {
            expect(() => {
                let warehouse = new Warehouse(10);
                warehouse.addProduct('Food', 'bannana', 11);
            }).to.throw('There is not enough space or the warehouse is already full');
        });
        it('should throw on not enough capacity for more products', function () {
            expect(() => {
                let warehouse = new Warehouse(10);
                warehouse.addProduct('Food', 'bannana', 4);
                warehouse.addProduct('Food', 'apple', 4);
                warehouse.addProduct('Food', 'orange', 3);
            }).to.throw('There is not enough space or the warehouse is already full');
        });        
    });

    describe('orderProducts', function () {
        it('should order products for food with correct values', function () {
            let warehouse = new Warehouse(1000);
            warehouse.addProduct('Drink', 'tea', 10);
            warehouse.addProduct('Food', 'bannana', 10);
            warehouse.addProduct('Food', 'apple', 15);
            warehouse.addProduct('Food', 'bannana', 30);
            warehouse.addProduct('Drink', 'coffee', 15);
            warehouse.addProduct('Food', 'orange', 10);
            warehouse.addProduct('Drink', 'milk', 30);

            let food = warehouse.orderProducts('Food');
            let foodProducts = Object.keys(food);
            let expectedFood = {
                'bannana': 40,
                'apple': 15,
                'orange': 10
            };
            let expectedFoodProducts = Object.keys(expectedFood);

            for (let i = 0; i < expectedFoodProducts.length; i++) {
                expect(foodProducts[i]).to.be.equal(expectedFoodProducts[i]);
            }
        });

        it('should order products for drink with correct values', function () {
            let warehouse = new Warehouse(1000);
            warehouse.addProduct('Drink', 'tea', 10);
            warehouse.addProduct('Food', 'bannana', 10);
            warehouse.addProduct('Food', 'apple', 15);
            warehouse.addProduct('Food', 'bannana', 30);
            warehouse.addProduct('Drink', 'coffee', 15);
            warehouse.addProduct('Food', 'orange', 10);
            warehouse.addProduct('Drink', 'milk', 30);

            let drink = warehouse.orderProducts('Drink');
            let drinkProducts = Object.keys(drink);
            let expectedDrink = {
                'milk': 30,
                'coffee': 15,
                'tea': 10
            };
            let expectedDrinkProducts = Object.keys(expectedDrink);

            for (let i = 0; i < expectedDrinkProducts.length; i++) {
                expect(drinkProducts[i]).to.be.equal(expectedDrinkProducts[i]);
            }
        });
    });
    
    describe('occupiedCapacity', function () {
        it('should return 0 capacity for empty space', function () {
            let warehouse = new Warehouse(10);
            expect(warehouse.occupiedCapacity()).to.be.equal(0);
        });
        it('should return correct capacity for full space with food', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'bannana', 6);
            warehouse.addProduct('Food', 'apple', 3);
            warehouse.addProduct('Food', 'orange', 1);
            expect(warehouse.occupiedCapacity()).to.be.equal(10);
        });
        it('should return correct capacity for full space with drink', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Drink', 'milk', 6);
            warehouse.addProduct('Drink', 'coffee', 3);
            warehouse.addProduct('Drink', 'tea', 1);
            expect(warehouse.occupiedCapacity()).to.be.equal(10);
        });
        it('should return correct capacity for full space with food and drink', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'bannana', 6);
            warehouse.addProduct('Drink', 'tea', 3);
            warehouse.addProduct('Food', 'orange', 1);
            expect(warehouse.occupiedCapacity()).to.be.equal(10);
        });
    });

    describe('scrapeAProduct', function () {        
        it('should throw for inexistant type', function () {
            expect(() => {
                let warehouse = new Warehouse(10);
                warehouse.addProduct('Food', 'bannana', 6);
                warehouse.addProduct('Food', 'apple', 3);
                warehouse.scrapeAProduct('orange', 1)
            }).to.throw('orange do not exists');
        });

        it('should give correct result for less than available quantity', function() {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'bannana', 6);
            warehouse.addProduct('Food', 'apple', 3);
            expect(JSON.stringify(warehouse.scrapeAProduct('bannana', 5))).to.be.equal('{"bannana":1,"apple":3}');
        });
        it('should give 0 for more than available quantity', function() {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'bannana', 6);
            warehouse.addProduct('Food', 'apple', 3);
            expect(JSON.stringify(warehouse.scrapeAProduct('bannana', 7))).to.be.equal('{"bannana":0,"apple":3}');
        });
    });

    describe('revision', function () {
        it('should return correct message for empty warehouse', function () {
            let warehouse = new Warehouse(10);
            expect(warehouse.revision()).to.be.equal('The warehouse is empty');
        });

        it('should return correct value for warehouse with food', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'bannana', 6);
            warehouse.addProduct('Food', 'apple', 3);
            warehouse.addProduct('Food', 'orange', 1);
            let expectedString = 'Product type - [Food]\n- bannana 6\n- apple 3\n- orange 1\nProduct type - [Drink]';
            expect(warehouse.revision()).to.be.equal(expectedString);
        });
        it('should return correct value for warehouse with drink', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Drink', 'milk', 6);
            warehouse.addProduct('Drink', 'coffee', 3);
            warehouse.addProduct('Drink', 'tea', 1);
            let expectedString = 'Product type - [Food]\nProduct type - [Drink]\n- milk 6\n- coffee 3\n- tea 1';
            expect(warehouse.revision()).to.be.equal(expectedString);
        });
        it('should return correct value for warehouse with food and drink', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'bannana', 6);
            warehouse.addProduct('Drink', 'tea', 3);
            warehouse.addProduct('Food', 'orange', 1);
            let expectedString = 'Product type - [Food]\n- bannana 6\n- orange 1\nProduct type - [Drink]\n- tea 3';
            expect(warehouse.revision()).to.be.equal(expectedString);
        });
    }); 
    
    describe('constructor', function () {        
        it('should have correct capacity', function () {
            let warehouse = new Warehouse(10);
            expect(warehouse.capacity).to.be.equal(10);
        });        

        it('should throw on negative capacity', function () {
            expect(() => { new Warehouse(-10); }).to.throw('Invalid given warehouse space');
        });
        it('should throw on 0 capacity', function () {
            expect(() => { new Warehouse(0); }).to.throw('Invalid given warehouse space');
        });
        it('should throw on string instead number for capacity', function () {
            expect(() => { new Warehouse('10'); }).to.throw('Invalid given warehouse space');
        });
    });

    describe('addProduct', function () {
        it('should add product correctly', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'bannana', 9);
            expect(Object.keys(warehouse.availableProducts['Food']).length).to.be.equal(1);
        });
        it('should add products correctly', function () {
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food', 'bannana', 3);
            warehouse.addProduct('Food', 'orange', 3);
            warehouse.addProduct('Food', 'apple', 4);
            expect(Object.keys(warehouse.availableProducts['Food']).length).to.be.equal(3);
        });

        it('should throw on not enough capacity for one product', function () {
            expect(() => {
                let warehouse = new Warehouse(10);
                warehouse.addProduct('Food', 'bannana', 11);
            }).to.throw('There is not enough space or the warehouse is already full');
        });
        it('should throw on not enough capacity for more products', function () {
            expect(() => {
                let warehouse = new Warehouse(10);
                warehouse.addProduct('Food', 'bannana', 4);
                warehouse.addProduct('Food', 'apple', 4);
                warehouse.addProduct('Food', 'orange', 3);
            }).to.throw('There is not enough space or the warehouse is already full');
        });        
    });

    describe('orderProducts', function () {
        it('should order products for food with correct values', function () {
            let warehouse = new Warehouse(1000);
            warehouse.addProduct('Drink', 'tea', 10);
            warehouse.addProduct('Food', 'bannana', 10);
            warehouse.addProduct('Food', 'apple', 15);
            warehouse.addProduct('Food', 'bannana', 30);
            warehouse.addProduct('Drink', 'coffee', 15);
            warehouse.addProduct('Food', 'orange', 10);
            warehouse.addProduct('Drink', 'milk', 30);

            let food = warehouse.orderProducts('Food');
            let foodProducts = Object.keys(food);
            let expectedFood = {
                'bannana': 40,
                'apple': 15,
                'orange': 10
            };
            let expectedFoodProducts = Object.keys(expectedFood);

            for (let i = 0; i < expectedFoodProducts.length; i++) {
                expect(foodProducts[i]).to.be.equal(expectedFoodProducts[i]);
            }
        });        
    });

    describe('occupiedCapacity', function () {
        let warehouse;
        beforeEach(function() {
            warehouse = new Warehouse(10);
        });

        it('should return 0 capacity for empty space', function () {            
            expect(warehouse.occupiedCapacity()).to.be.equal(0);
        });
        it('should return correct capacity for full space with food', function () {            
            warehouse.addProduct('Food', 'bannana', 6);
            warehouse.addProduct('Food', 'apple', 3);
            warehouse.addProduct('Food', 'orange', 1);
            expect(warehouse.occupiedCapacity()).to.be.equal(10);
        });
        it('should return correct capacity for full space with drink', function () {           
            warehouse.addProduct('Drink', 'milk', 6);
            warehouse.addProduct('Drink', 'coffee', 3);
            warehouse.addProduct('Drink', 'tea', 1);
            expect(warehouse.occupiedCapacity()).to.be.equal(10);
        });
        it('should return correct capacity for full space with food and drink', function () {           
            warehouse.addProduct('Food', 'bannana', 6);
            warehouse.addProduct('Drink', 'tea', 3);
            warehouse.addProduct('Food', 'orange', 1);
            expect(warehouse.occupiedCapacity()).to.be.equal(10);
        });
    });

    describe('scrapeAProduct', function () {
        let warehouse;
        beforeEach(function() {
            warehouse = new Warehouse(5);
            warehouse.addProduct("Food", "banana", 4);
            warehouse.addProduct("Food", "apple", 1);
        });        
        
        it('should throw for non existing type', function () {
            expect(() => {                
                warehouse.scrapeAProduct('orange', 1)
            }).to.throw('orange do not exists');
        });

        it('should give correct result for less than available quantity', function() {            
            expect(JSON.stringify(warehouse.scrapeAProduct('banana', 3))).to.be.equal('{"banana":1,"apple":1}');
        });
        it('should give 0 for more than available quantity', function() {            
            expect(JSON.stringify(warehouse.scrapeAProduct('banana', 5))).to.be.equal('{"banana":0,"apple":1}');
        });
    });
    
    describe('revision', function () {
        let warehouse;
        beforeEach(function(){
            warehouse = new Warehouse(10);
        });
        it('should return correct message for empty warehouse', function () {            
            expect(warehouse.revision()).to.be.equal('The warehouse is empty');
        });

        it('should return correct value for warehouse with food', function () {            
            warehouse.addProduct('Food', 'bannana', 6);
            warehouse.addProduct('Food', 'apple', 3);
            warehouse.addProduct('Food', 'orange', 1);
            let expectedString = 'Product type - [Food]\n- bannana 6\n- apple 3\n- orange 1\nProduct type - [Drink]';
            expect(warehouse.revision()).to.be.equal(expectedString);
        });
        it('should return correct value for warehouse with drink', function () {            
            warehouse.addProduct('Drink', 'milk', 6);
            warehouse.addProduct('Drink', 'coffee', 3);
            warehouse.addProduct('Drink', 'tea', 1);
            let expectedString = 'Product type - [Food]\nProduct type - [Drink]\n- milk 6\n- coffee 3\n- tea 1';
            expect(warehouse.revision()).to.be.equal(expectedString);
        });
        it('should return correct value for warehouse with food and drink', function () {            
            warehouse.addProduct('Food', 'bannana', 6);
            warehouse.addProduct('Drink', 'tea', 3);
            warehouse.addProduct('Food', 'orange', 1);
            let expectedString = 'Product type - [Food]\n- bannana 6\n- orange 1\nProduct type - [Drink]\n- tea 3';
            expect(warehouse.revision()).to.be.equal(expectedString);
        });
    });
});
