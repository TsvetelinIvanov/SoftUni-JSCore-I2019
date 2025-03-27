function checkEqualDigits(inputNumber) {
    let numberString = inputNumber.toString();
    let digitsSum = 0;
    let areEqualDigits = true;
    for (let i = 0; i < numberString.length; i++) {
        if (numberString[0] !== numberString[i]) {
            areEqualDigits = false;
        }
        
        digitsSum += Number(numberString[i]);
    }

    console.log(areEqualDigits);
    console.log(digitsSum);
}

checkEqualDigits(2222222)
checkEqualDigits(1234)
