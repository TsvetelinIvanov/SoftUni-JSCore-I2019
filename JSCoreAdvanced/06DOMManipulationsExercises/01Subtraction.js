function subtract() {
    let firstNumberElement = document.getElementById('firstNumber');
    let secondNumberElement = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');

    let firstNumber = Number(firstNumberElement.value);
    let secondNumber = Number(secondNumberElement.value);
    let subtractionResult = firstNumber - secondNumber;
    resultElement.textContent = subtractionResult;
}
