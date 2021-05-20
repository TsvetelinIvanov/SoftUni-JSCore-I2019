function solve() {
    let inputElement = document.getElementById('input');
    let outputElement = document.getElementById('output');
    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', extract);

    function extract(){
        let inputString = inputElement.value;
        let charactersToTakeCountString = /[0-9]+/.exec(inputString)[0];
        // let stringToTake = inputString.substr(0, Number(charactersToTakeCountString));
        // stringToTake = stringToTake.substr(charactersToTakeCountString.length);
        let stringToTake = inputString.substring(charactersToTakeCountString.length, Number(charactersToTakeCountString) + charactersToTakeCountString.length);        
        let delimeter = stringToTake[stringToTake.length - 1];
        let [charactersToRemove, stringToCheck] = stringToTake.split(delimeter).filter(c => c !== '');
        let regex = new RegExp(`[${charactersToRemove}]`, 'g');        
        let outputString = stringToCheck.replace(regex, '');
        outputString = outputString.replace(/#/g, ' ');
        outputElement.value = outputString;
    }
}