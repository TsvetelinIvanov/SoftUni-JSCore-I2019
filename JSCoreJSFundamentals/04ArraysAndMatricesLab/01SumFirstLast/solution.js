function solve() {
    let inputArray = JSON.parse(document.getElementById("arr").value);  
    let resultElement = document.getElementById('result');
    calculate(inputArray);

    function calculate(array) {
        for (let i = 0; i < array.length; i++) {
            let p = document.createElement('p');
            p.textContent = `${i} -> ${array[i] * array.length}`;
            resultElement.appendChild(p);
        }
    }
}
