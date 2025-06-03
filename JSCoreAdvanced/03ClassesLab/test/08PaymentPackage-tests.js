let expect = require('chai').expect;
let PaymentPackage = require('../08PaymentPackage').PaymentPackage;
//In Judge must be paste without this above
describe('PaymentPackage', function() {
    describe('constructor with correct parameters', function() {
        let paymentPackage;
        beforeEach(function() {
            paymentPackage = new PaymentPackage('testPaymentPackage', 60.5);
        });

        it('should create an instance with correct parameters', function() {
            paymentPackage = new PaymentPackage('testPaymentPackage', 100);            
            expect(paymentPackage instanceof PaymentPackage).to.be.true;
        });

        it('should create an instance with correct property _name', function() {
            expect(paymentPackage.hasOwnProperty('_name')).to.be.true;
        });
        it('should create an instance with correct property _value', function() {
            expect(paymentPackage.hasOwnProperty('_value')).to.be.true;
        });
        it('should create an instance with correct property _VAT', function() {
            expect(paymentPackage.hasOwnProperty('_VAT')).to.be.true;
        });
        it('should create an instance with correct property _active', function() {
            expect(paymentPackage.hasOwnProperty('_active')).to.be.true;
        });
        
        it('should have correct value for name', function() {
            expect(paymentPackage.name).to.be.equal('testPaymentPackage');            
        });
        it('should have correct value for _name', function() {
            expect(paymentPackage._name).to.be.equal('testPaymentPackage');            
        });
        it('should have correct value for value', function() {
            expect(paymentPackage.value).to.be.closeTo(60.5, 0.01);            
        });        
        it('should have correct value for _value', function() {
            expect(paymentPackage._value).to.be.closeTo(60.5, 0.01);            
        });
        it('should have correct value for VAT', function() {
            expect(paymentPackage.VAT).to.be.closeTo(20, 0.01);            
        });
        it('should have correct value for _VAT', function() {
            expect(paymentPackage._VAT).to.be.closeTo(20, 0.01);            
        });
        it('should have correct value for active', function() {
            expect(paymentPackage.active).to.be.true;            
        });       
        it('should have correct value for _VAT', function() {
            expect(paymentPackage._VAT).to.be.greaterThan(1);            
        });
        it('should have correct value for _active', function() {
            expect(paymentPackage._active).to.be.true;            
        });
    });

    describe('constructor with incorrect parameters', function() {
        let paymentPackage;
        it('should throw for (120, 120)', function() {
            expect(() => paymentPackage = new PaymentPackage(120, 120)).to.throw();
        });
        it('should throw for ("abc", "def")', function() {
            expect(() => paymentPackage = new PaymentPackage("abc", "def")).to.throw();
        });
        it('should throw for ([], 120)', function() {
            expect(() => paymentPackage = new PaymentPackage([], 120)).to.throw();
        });
        it('should throw for ({}, 120)', function() {
            expect(() => paymentPackage = new PaymentPackage({}, 120)).to.throw();
        });
        it('should throw for (null, 120)', function() {
            expect(() => paymentPackage = new PaymentPackage(null, 120)).to.throw();
        });
        it('should throw for (undefined, 120)', function() {
            expect(() => paymentPackage = new PaymentPackage(undefined, 120)).to.throw();
        });
        it('should throw for ("", 120)', function() {
            expect(() => paymentPackage = new PaymentPackage("", 120)).to.throw();
        });
        it('should throw for (new Date(2019, 10, 10), 120)', function() {
            expect(() => paymentPackage = new PaymentPackage(new Date(2019, 10, 10), 120)).to.throw();
        });
        it('should throw for ("abc", -1)', function() {
            expect(() => paymentPackage = new PaymentPackage("abc", -1)).to.throw();
        });
        it('should throw for ("abc", [])', function() {
            expect(() => paymentPackage = new PaymentPackage("abc", [])).to.throw();
        });
        it('should throw for ("abc", {})', function() {
            expect(() => paymentPackage = new PaymentPackage("abc", {})).to.throw();
        });
        it('should throw for ("abc", null)', function() {
            expect(() => paymentPackage = new PaymentPackage("abc", null)).to.throw();
        });
        it('should throw for ("abc", new Date(2019, 10, 10))', function() {
            expect(() => paymentPackage = new PaymentPackage("abc", new Date(2019, 10, 10))).to.throw();
        });
        it('should throw for ("abc", undfined)', function() {
            expect(() => paymentPackage = new PaymentPackage("abc", undefined)).to.throw();
        });
        it('should throw for ("abc", "")', function() {
            expect(() => paymentPackage = new PaymentPackage("abc", "")).to.throw();
        });
        it('should throw for ("abc")', function() {
            expect(() => paymentPackage = new PaymentPackage("abc")).to.throw();
        });
    });    

    describe("value - addition tests", function () {
        it('should have correct value for value like 0.5', function() {
            let paymentPackage = new PaymentPackage("abc", 0.5);
            expect(paymentPackage.value).to.be.closeTo(0.5, 0.001);                        
        });        
    });
    
    describe('toString works correctly', function() {
        it('should return correct value for ("abc", 100)', function() {
            let paymentPackage = new PaymentPackage("abc", 100);
            let expectedText = 'Package: abc\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120';
            let actualText = paymentPackage.toString();
            expect(actualText).to.be.equal(expectedText);
        });
        it('should return correct value for ("abc", 100) and inactive', function() {
            let paymentPackage = new PaymentPackage("abc", 100);
            let expectedText = 'Package: abc (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120';
            paymentPackage.active = false;
            let actualText = paymentPackage.toString();
            expect(actualText).to.be.equal(expectedText);
        });
        it('should return correct value for ("abc", 0) and inactive', function() {
            let paymentPackage = new PaymentPackage("abc", 0);
            let expectedText = 'Package: abc (inactive)\n- Value (excl. VAT): 0\n- Value (VAT 20%): 0';
            paymentPackage.active = false;
            let actualText = paymentPackage.toString();
            expect(actualText).to.be.equal(expectedText);
        });
    });

    // describe("toString", function() {
    //     it("should return correct value for ('asdasd', 500)", function() {
    //         let p = new PaymentPackage("asdasd", 500);
    //         let expectedText = [
    //             `Package: ${p.name}` + '',
    //             `- Value (excl. VAT): ${p.value}`,
    //             `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
    //         ].join("\n");
    //         let actualText = p.toString();
    //         expect(actualText).to.be.equal(expectedText);
    //     });
    //     // it("should return correct value for ('heyheyhey', 0.5)", function() {
    //     //     let p = new PaymentPackage("heyheyhey", 0.5);
    //     //     let expectedText = [
    //     //         `Package: ${p.name}` + '',
    //     //         `- Value (excl. VAT): ${p.value}`,
    //     //         `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
    //     //     ].join("\n");
    //     //     let actualText = p.toString();
    //     //     expect(actualText).to.be.equal(expectedText);
    //     // });
    //     // it("should return correct value for ('h', 5000)", function() {
    //     //     let p = new PaymentPackage("h", 5000);
    //     //     let expectedText = [
    //     //         `Package: ${p.name}` + '',
    //     //         `- Value (excl. VAT): ${p.value}`,
    //     //         `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
    //     //     ].join("\n");
    //     //     let actualText = p.toString();
    //     //     expect(actualText).to.be.equal(expectedText);
    //     // });

    //     // it("should return correct value for ('h', 5000) inactive", function() {
    //     //     let p = new PaymentPackage("h", 5000);
    //     //     p.active = false;
    //     //     p.active = true;
    //     //     p.active = false;
    //     //     let expectedText = [
    //     //         `Package: ${p.name}` + ' (inactive)',
    //     //         `- Value (excl. VAT): ${p.value}`,
    //     //         `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
    //     //     ].join("\n");
    //     //     let actualText = p.toString();
    //     //     expect(actualText).to.be.equal(expectedText);
    //     // });
    //     it("should return correct value for ('123123123', 123) inactive", function() {
    //         let p = new PaymentPackage("123123123", 123);
    //         p.active = false;
    //         p.active = true;
    //         p.active = false;
    //         let expectedText = [
    //             `Package: ${p.name}` + ' (inactive)',
    //             `- Value (excl. VAT): ${p.value}`,
    //             `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
    //         ].join("\n");
    //         let actualText = p.toString();
    //         expect(actualText).to.be.equal(expectedText);
    //     });
    //     // it("should return correct value for ('123123123', 0.9) inactive", function() {
    //     //     let p = new PaymentPackage("123123123", 0.9);
    //     //     p.active = false;
    //     //     p.active = true;
    //     //     p.active = false;
    //     //     let expectedText = [
    //     //         `Package: ${p.name}` + ' (inactive)',
    //     //         `- Value (excl. VAT): ${p.value}`,
    //     //         `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
    //     //     ].join("\n");
    //     //     let actualText = p.toString();
    //     //     expect(actualText).to.be.equal(expectedText);
    //     // });
    //     it("should return correct value for ('0', 0) inactive", function() {
    //         let p = new PaymentPackage("0", 0);
    //         p.active = false;
    //         p.active = true;
    //         p.active = false;
    //         let expectedText = [
    //             `Package: ${p.name}` + ' (inactive)',
    //             `- Value (excl. VAT): ${p.value}`,
    //             `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
    //         ].join("\n");
    //         let actualText = p.toString();
    //         expect(actualText).to.be.equal(expectedText);
    //     });
    // });
});
