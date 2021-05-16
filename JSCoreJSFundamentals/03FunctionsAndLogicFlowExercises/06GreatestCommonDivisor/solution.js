// function greatestCD() { //75/100 in Judge
//     let firstNumber = document.getElementById('num1').value;
//     let secondNumber = document.getElementById('num2').value;
//     let result = findGreatestCommonDivisor(firstNumber, secondNumber);
//     let resultElement = document.getElementById('result');
//     resultElement.innerHTML = result;

//     function findGreatestCommonDivisor(firstNumber, secondNumber){
//         let lowerNumber = Math.min(firstNumber, secondNumber);
//         for(let i = lowerNumber; i > 0; i--){
//             if (firstNumber % i === 0 && secondNumber % i === 0){
//                 return i;
//             }
//         }
//     }    
// }

function greatestCD() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let result = document.getElementById('result');

    function gcd(a, b) {
        if ( ! b) {
            return a;
        }

        return gcd(b, a % b);
    }
result.innerHTML = gcd(num1, num2);
}
