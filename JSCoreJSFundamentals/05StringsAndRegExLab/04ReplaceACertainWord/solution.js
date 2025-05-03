function solve() {
    let inputArray = JSON.parse(document.getElementById('arr').value);
    let wordForReplacing = document.getElementById('str').value;
    replaceWord(inputArray, wordForReplacing);

    function replaceWord(arr, replacement) {
        let resultElement = document.getElementById('result');
        let wordReplaced = arr[0].split(' ').filter(w => w !== '')[2];
        let regex = new RegExp(wordReplaced, 'gi');
        for (let element of arr) {
            element = element.replace(regex, replacement);
            let p = document.createElement('p');
            p.textContent = element;
            resultElement.appendChild(p);
        }
    }
}
