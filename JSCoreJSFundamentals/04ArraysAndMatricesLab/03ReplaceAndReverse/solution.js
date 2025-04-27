function solve() {
    let inputArray = JSON.parse(document.getElementById('arr').value);
    let result = reverseAndMakeFirstLetterUpper(inputArray);
    document.getElementById('result').innerHTML = result;

    function reverseAndMakeFirstLetterUpper(inputArray) {
        inputArray.forEach((element, index) => {
            element = element.split('').reverse().join('');
            inputArray[index] = element.charAt(0).toUpperCase().concat(element.slice(1));
        });

        return inputArray.join(' ');
    }
}
