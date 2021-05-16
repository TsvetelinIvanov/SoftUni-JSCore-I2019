function findGCD(x, y){
    let gcd;
    if(x === y){
        gcd = x;
    } else if(x > y){
        gcd = findGCD((x - y), y);
    } else if(x < y){
        gcd = findGCD(x, (y - x));
    }

    return gcd;
}

console.log(findGCD(252, 105))