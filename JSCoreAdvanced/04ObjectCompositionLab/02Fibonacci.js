function getFibonator(){
    let sum = 0;
    let first = 0;
    let second = 1;
    return makeFibonator;

    function makeFibonator(){
        sum = first + second;
        first = second;
        second = sum;
        return first;
    }
}

let fibonacciNumber = getFibonator();
console.log(fibonacciNumber()); // 1
console.log(fibonacciNumber()); // 1
console.log(fibonacciNumber()); // 2
console.log(fibonacciNumber()); // 3
console.log(fibonacciNumber()); // 5
console.log(fibonacciNumber()); // 8
console.log(fibonacciNumber()); // 13
