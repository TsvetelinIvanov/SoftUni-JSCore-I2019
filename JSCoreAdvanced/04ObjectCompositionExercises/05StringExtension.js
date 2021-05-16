(function extendString() {
    String.prototype.ensureStart = function(str){
        let stringToReturn = this.toString();
        if (!stringToReturn.startsWith(str)) {
            stringToReturn = str + stringToReturn;
        }

        return stringToReturn;
    };

    String.prototype.ensureEnd = function(str){
        let stringToReturn = this.toString();
        if(!stringToReturn.endsWith(str)){
            stringToReturn += str;
        }

        return stringToReturn;
    };

    String.prototype.isEmpty = function(){
        if(this.length === 0){
            return true;
        }
        return false;
    };

    String.prototype.truncate = function(n){
        let stringToReturn = this.toString();
        if(n < 4){
            return '.'.repeat(n);
        }

        if(stringToReturn.length <= n){
            return stringToReturn;
        }

        stringToReturn = stringToReturn.substr(0, n - 2);
        let lastWhitespaceIndex = stringToReturn.lastIndexOf(' ');
        if(lastWhitespaceIndex === -1){
            return stringToReturn.substr(0, stringToReturn.length - 1) + '...';
        }

        return stringToReturn.substr(0, lastWhitespaceIndex) + '...';
    };

    String.format = function(string, ...params){
        for (let i = 0; i < params.length; i++) {
            let index = string.indexOf(`{${i}}`);
            while(index !== -1){
                string = string.replace(`{${i}}`, params[i]);
                index = string.indexOf(`{${i}}`);
            }                       
        }
        return string;
    };
})()

let str = 'my string'
str = str.ensureStart('my')
console.log(str)
str = str.ensureStart('hello ')
console.log(str)
str = str.truncate(16)
console.log(str)
str = str.truncate(14)
console.log(str)
str = str.truncate(8)
console.log(str)
str = str.truncate(4)
console.log(str)
str = str.truncate(2)
console.log(str)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}',
    'dog');
console.log(str)
