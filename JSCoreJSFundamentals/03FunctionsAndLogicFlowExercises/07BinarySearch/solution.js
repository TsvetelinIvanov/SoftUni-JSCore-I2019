// function binarySearch() {
//     let inputIntegerArrayElement = document.getElementById('arr');
//     let inputIntegerArray = JSON.parse(inputIntegerArrayElement.value);
//     let numberToSearchElement = document.getElementById('num');
//     let numberToSearch = Number(numberToSearchElement.value);
//     let resultElement = document.getElementById('result');    
//     if (inputIntegerArray.indexOf(numberToSearch) === -1) {
//         resultElement.innerHTML = numberToSearch + ' is not in the array';
//     } 
//     else {
//         resultElement.innerHTML = `Found ${numberToSearch} at index ${inputIntegerArray.indexOf(numberToSearch)}`;
//     }    
// }

function binarySearch() {
    let inputIntegerArrayElement = document.getElementById('arr');
    let inputString = inputIntegerArrayElement.value;
    //inputString = inputrString.substring(1, inputString.length - 1);
    inputIntegerArray = inputString.split(', ').map(Number);
    console.log(inputIntegerArray);
    
    let numberToSearchElement = document.getElementById('num');
    let numberToSearch = Number(numberToSearchElement.value);
    
    let resultElement = document.getElementById('result');    
    if (inputIntegerArray.indexOf(numberToSearch) === -1) {
        resultElement.innerHTML = numberToSearch + ' is not in the array';
    } 
    else {
        resultElement.innerHTML = `Found ${numberToSearch} at index ${inputIntegerArray.indexOf(numberToSearch)}`;
    }    
}

// function binarySearch() {
//     let inputIntegerArrayElement = document.getElementById('arr');
//     let inputrString = inputIntegerArrayElement.value;
//     //inputrString = inputrString.substring(1, inputrString.length - 1);
//     inputIntegerArray = inputrString.split(', ');

//     let numberToSearchElement = document.getElementById('num');
//     let numberToSearch = Number(numberToSearchElement.value);

//     let resultElement = document.getElementById('result');    
//     let isInArray = false;
//     let index;
//     for (let i = 0; i < inputIntegerArray.length; i++) {
//         if (+inputIntegerArray[i] === numberToSearch) {
//             isInArray = true;
//             index = i;
//         }
//     }

//     if (isInArray === true) {
//         resultElement.innerHTML = `Found ${numberToSearch} at index ${index}`;
//     }
//     else {
//         resultElement.innerHTML = numberToSearch + ' is not in the array';
//     }    
// }
