class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this._innerLength = innerLength;
    }

    get innerLength() { return this._innerLength; }
    set innerLength(innerLength) {
        //innerLength = Number(innerLength);
        if (innerLength < 0) {
            innerLength = 0;
        }
        
        this._innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
    }

    toString() {
        let stringToReturn = this.innerString.substr(0, this.innerLength);
        if (this.innerString.length > this.innerLength) {
            stringToReturn += '...';
        }
        
        return stringToReturn;
    }
}

let str = new Stringer("Test", 5);
console.log(str.toString()); //Test

str.decrease(3);
console.log(str.toString()); //Te...

str.decrease(5);
console.log(str.toString()); //...

str.increase(4);
console.log(str.toString()); //Test
