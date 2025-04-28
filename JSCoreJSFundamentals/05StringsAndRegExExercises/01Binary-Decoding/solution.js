function solve() {
    let inputString = document.getElementById('str').value;      
    let onesSum = getOnesSum(inputString);  
    let slicedInputString = inputString.slice(onesSum, inputString.length - onesSum);
  
    let outputArray =[];
    for (let i = 0; i < slicedInputString.length; i += 8) {
        let currentBinaryPart = slicedInputString.slice(i, i + 8);    
        let currentDecimalPart = parseInt(currentBinaryPart, 2);    
        let currentCharacter = String.fromCharCode(currentDecimalPart);
      
        let pattern = /[A-Za-z ]/;
        if (pattern.test(currentCharacter)) {
            outputArray.push(currentCharacter);
        }
    }

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = outputArray.join('');

    function getOnesSum(input) {
        let sumDigit = input;
        while(sumDigit.length > 1) {
            let currentSumDigit = sumDigit.split('').reduce((a,b) => Number(a) + Number(b)).toString();
            sumDigit = currentSumDigit;
        }
      
        return Number(sumDigit);
    }
}
