function solve() {
    let inputArray = JSON.parse(document.getElementById('arr').value);
    let result = [];
    calculate();
    document.getElementById('result').innerHTML = result.join(' x ');

    function calculate() {
        inputArray.forEach((element, index) => {
            if (index % 2 === 0) {
                result.push(element);
            }
        });
    }
}
