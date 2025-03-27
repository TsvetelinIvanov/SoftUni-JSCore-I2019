function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', convert);
    let inputNumberElement = document.getElementById('input');        

        let menuElement = document.getElementById('selectMenuTo');
        let optionBinary = document.createElement('option');
        optionBinary.textContent = 'Binary';
        optionBinary.value = 'binary';
        menuElement.appendChild(optionBinary);
    
        let optionHexadecimal = document.createElement('option');
        optionHexadecimal.textContent = 'Hexadecimal';
        optionHexadecimal.value = 'hexadecimal';
        menuElement.appendChild(optionHexadecimal);

    function convert() {        
        let selectedOption = menuElement.options[menuElement.selectedIndex].value;
        let numberSystem = {binary:2, decimal:10, hexadecimal:16};
        let convertedNumber = (inputNumberElement.value >>> 0).toString(numberSystem[selectedOption]).toUpperCase();

        document.getElementById('result').value = convertedNumber;
        inputNumberElement.value = '';
    }
}
