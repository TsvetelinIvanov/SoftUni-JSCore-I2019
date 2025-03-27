function findGreatestCommonDivisor(firstNumber, secondNumber) {
    let lowerNumber = Math.min(firstNumber, secondNumber);
    for (let i = lowerNumber; i > 0; i--) {
        if (firstNumber % i === 0 && secondNumber % i === 0){
            console.log(i);
            break;
        }
    }
}

findGreatestCommonDivisor(15, 5)
findGreatestCommonDivisor(2154, 458)
