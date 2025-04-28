function solve() {
    let inputArray = JSON.parse(document.getElementById('arr').value);
    sortAscendingAndAlphabetically(inputArray);

    function sortAscendingAndAlphabetically(input) {
        let resultElement = document.getElementById('result');    
        let sortedAscending = input.sort((a, b) => a - b);
        let div1 = document.createElement('div');
        div1.textContent = sortedAscending.join(', ');
        resultElement.appendChild(div1);
      
        let sortedAlphabetically = input.sort((a, b) => a.localeCompare(b));
        //let sortedAlphabetically = input.sort();
        let div2 = document.createElement('div');
        div2.textContent = sortedAlphabetically.join(', ');
        resultElement.appendChild(div2);
    }
}
