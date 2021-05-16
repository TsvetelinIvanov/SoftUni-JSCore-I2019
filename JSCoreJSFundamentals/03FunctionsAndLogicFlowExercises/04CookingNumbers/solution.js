function solve() {
    let inputElement = document.querySelector('#exercise>input');    
    let buttons = document.querySelectorAll('button');
    let buttonNames = {Chop: chop, Dice: dice, Spice: spice, Bake: bake, Fillet: fillet};
    Array.from(buttons).forEach(button => button.addEventListener('click', buttonNames[button.textContent]));
    //let inputNumber = Number(inputElement.value);
    //console.log(document.querySelector('#exercise>input').value);
    let outputElement = document.getElementById('output');
    let currentNumber;

    function updateNumber(){
        let inputNumber = Number(inputElement.value);
        return Number(currentNumber) || inputNumber;
        //return Number(currentNumber) || Number(inputElement.value);
    }

    function chop(){
        currentNumber = updateNumber() / 2;
        outputElement.textContent = currentNumber;
    }

    function dice(){
        currentNumber = Math.sqrt(updateNumber());
        outputElement.textContent = currentNumber;
    }

    function spice(){
        currentNumber = updateNumber() + 1;
        outputElement.textContent = currentNumber;
    }

    function bake(){
        currentNumber = updateNumber() * 3;
        outputElement.textContent = currentNumber;
    }

    function fillet(){
        currentNumber = updateNumber() * 0.8;
        outputElement.textContent = currentNumber;
    }
}
