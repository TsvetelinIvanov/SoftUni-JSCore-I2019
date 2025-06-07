(function extendArray() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };

    Array.prototype.skip = function(n) {
        let skippedArray = [];
        for (let i = n; i < this.length; i++) {
            let elemenToReturn = this[i];
            skippedArray.push(elemenToReturn);           
        }
        
        return skippedArray;
    };

    Array.prototype.take = function(n) {
        let takenArray = [];
        for (let i = 0; i < n; i++) {
            let elementToreturn = this[i];
            takenArray.push(elementToreturn);
        }
        
        return takenArray;
    };

    Array.prototype.sum = function() {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            let elementToSum = this[i];
            sum += elementToSum;            
        }
        
        return sum;
    };

    Array.prototype.average = function() {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            let elementToSum = this[i];
            sum += elementToSum;            
        }
        
        let average = sum / this.length;
        
        return average;
    };
})()
