function add(number){
    let sum = number;
    function sumNumbers(num){
        sum += num;
        return sumNumbers;
    }

    sumNumbers.toString = function (){
        return sum;
    };    

    return sumNumbers;
}

console.log(add(1).toString())
console.log(add(1)(6)(-3).toString())