let expect = require('chai').expect;
let rgbToHexColor = require('../06RGBtoHex.js').rgbToHexColor;
//In Judge must be paste without this above
describe('rgbToHexColor(red, green, blue) - converts rgb decimal value to hexadecimal', function() {
    describe('Normal cases(valid input)', function() {
        it('shuld return #000000 for (0, 0, 0)', function() {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        });
        it('shuld return #FFFFFF for (255, 255, 255)', function() {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
        });
        it('shuld return #FF9EAA for (255, 158, 170)', function() {
            expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
        });
        it('shuld return #FF9EAA for (255, 158, 170)', function() {
            expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
        });
        it('shuld return #0C0D0E for (12, 13, 14)', function() {
            expect(rgbToHexColor(12, 13, 14)).to.be.equal('#0C0D0E');
        });        
    });
    describe('Special cases(invalid input)', function() {
        it('should return undefined for (10, 10, -10)', function() {
            expect(rgbToHexColor(10, 10, -10)).to.be.equal(undefined);
        });
        it('should return undefined for (16, -10, 10)', function() {
            expect(rgbToHexColor(16, -10, 10)).to.be.equal(undefined);
        });
        it('should return undefined for (-10, 16, 10)', function() {
            expect(rgbToHexColor(-10, 16, 10)).to.be.equal(undefined);
        });
        it('should return undefined for (256, 10, 10)', function() {
            expect(rgbToHexColor(256, 10, 10)).to.be.equal(undefined);
        });
        it('should return undefined for (10, 256, 10)', function() {
            expect(rgbToHexColor(10, 256, 10)).to.be.equal(undefined);
        });
        it('should return undefined for (10, 10, 256)', function() {
            expect(rgbToHexColor(10, 10, 256)).to.be.equal(undefined);
        });
        it('should return undefined for ("k", 16, 10)', function() {
            expect(rgbToHexColor("k", 16, 10)).to.be.equal(undefined);
        });
        it('should return undefined for (10, "k", 10)', function() {
            expect(rgbToHexColor(10, "k", 10)).to.be.equal(undefined);
        });
        it('should return undefined for (10, 10, "k")', function() {
            expect(rgbToHexColor(10, 10, "k")).to.be.equal(undefined);
        });        
        it('should return undefined for (10, 10, [10])', function() {
            expect(rgbToHexColor(10, 10, [10])).to.be.equal(undefined);
        });
        it('should return undefined for (10, [10], 10)', function() {
            expect(rgbToHexColor(10, [10], 10)).to.be.equal(undefined);
        });
        it('should return undefined for ([10], 10, 10)', function() {
            expect(rgbToHexColor([10], 10, 10)).to.be.equal(undefined);
        });
        it('should return undefined for (10, 10, [])', function() {
            expect(rgbToHexColor(10, 10, [])).to.be.equal(undefined);
        });
        it('should return undefined for (10, [], 10)', function() {
            expect(rgbToHexColor(10, [], 10)).to.be.equal(undefined);
        });
        it('should return undefined for ([], 10, 10)', function() {
            expect(rgbToHexColor([], 10, 10)).to.be.equal(undefined);
        });
        it('should return undefined for (10, 10, {})', function() {
            expect(rgbToHexColor(10, 10, {})).to.be.equal(undefined);
        });
        it('should return undefined for (10, {}, 10)', function() {
            expect(rgbToHexColor(10, {}, 10)).to.be.equal(undefined);
        });
        it('should return undefined for ({}, 10, 10)', function() {
            expect(rgbToHexColor({}, 10, 10)).to.be.equal(undefined);
        });
    });
});
