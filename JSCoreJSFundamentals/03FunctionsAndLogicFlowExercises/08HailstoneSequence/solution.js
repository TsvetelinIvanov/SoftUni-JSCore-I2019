function getNext() {
    let inputNumber = Number(document.getElementById('num').value);
    let resultElement = document.getElementById('result');
    resultElement.textContent = doHailstoneSequence(inputNumber) + ' ';

    function doHailstoneSequence(n) {
        let sequence = [n];
        while (n !== 1) {
            if (n % 2 === 0) {
                n /= 2;
            } 
            else {
                n = n * 3 + 1;
            }
            
            sequence.push(n);
        }

        return sequence.join(' ');
    }
}
