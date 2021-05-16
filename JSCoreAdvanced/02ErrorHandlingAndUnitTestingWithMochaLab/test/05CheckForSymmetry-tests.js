let expect = require('chai').expect;
let isSymmetric = require('../05CheckForSymmetry.js').isSymmetric;
//In Judge must be paste without this above
describe('isSymmetric(arr) - checks if the array is symmetric', function(){
    it('should return true for [1, 2, 3, 3, 2, 1]', function(){
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.equal(true);
    });
    it('should return true for [1, 2, 3, 2, 1]', function(){
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.equal(true);
    });
    it('should return true for [1]', function(){
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it('should return true for ["hi"]', function(){
        expect(isSymmetric(["hi"])).to.be.equal(true);
    });
    it('should return true for ["a", "bb", "ccc", "ccc", "bb", "a"]', function(){
        expect(isSymmetric(["a", "bb", "ccc", "ccc", "bb", "a"])).to.be.equal(true);
    });
    it('should return true for ["a", "bb", "ccc", "bb", "a"]', function(){
        expect(isSymmetric(["a", "bb", "ccc", "bb", "a"])).to.be.equal(true);
    });
    it('should return true for ["a", 1, new Date("2017-01-10"), {c: "zy"}, "ccc", {c: "zy"}, new Date("2017-01-10"), 1, "a"]', function(){
        expect(isSymmetric(["a", 1, new Date("2017-01-10"), {c: "zy"}, "ccc", {c: "zy"}, new Date("2017-01-10"), 1, "a"])).to.be.equal(true);
    });
    it('should return false for [1, 2, 3]', function(){
        expect(isSymmetric([1, 2, 3])).to.be.equal(false);
    });
    it('should return false for ["aba", "bab", "bab"]', function(){
        expect(isSymmetric(["aba", "bab", "bab"])).to.be.equal(false);
    });
    it('should return false for ["a", 1, new Date("2017-01-10"), {c: "zy"}, "ccc", {c: "ZY"}, new Date("2017-01-10"), 1, "a"]', function(){
        expect(isSymmetric(["a", 1, new Date("2017-01-10"), {c: "zy"}, "ccc", {c: "ZY"}, new Date("2017-01-10"), 1, "a"])).to.be.equal(false);
    });
    it('should return false for {"[1, 2, 1]" : "[1, 2, 1]"}', function(){
        expect(isSymmetric({"[1, 2, 1]" : "[1, 2, 1]"})).to.be.equal(false);
    });
    it('should return false for "1, 2, 1"', function(){
        expect(isSymmetric("1, 2, 1")).to.be.equal(false);
    });
    it('should return false for 1, 2, 1', function(){
        expect(isSymmetric(1, 2, 1)).to.be.equal(false);
    });
    it('should return false for "1"', function(){
        expect(isSymmetric("1")).to.be.equal(false);
    });
    it('should return false for 1', function(){
        expect(isSymmetric(1)).to.be.equal(false);
    });
    // it('should return false for []', function(){ //this is wrong for Judge
    //     expect(isSymmetric([])).to.be.equal(false);
    // });
    it('should return false for true', function(){
        expect(isSymmetric(true)).to.be.equal(false);
    });
    it('should return false for false', function(){
        expect(isSymmetric(false)).to.be.equal(false);
    });
});