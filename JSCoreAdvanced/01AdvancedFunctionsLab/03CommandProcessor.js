function manipulateString(inputArray) {   
    let closure = (function() {
        let outputString = '';
        return {
            append: (str) => outputString += str,
            removeStart: (n) => outputString = outputString.substring(n),
            removeEnd: (n) => outputString = outputString.substring(0, outputString.length - n),
            print: () => console.log(outputString)
        }
    })();

    for (let inputRow of inputArray) {
        let [command, value] = inputRow.split(' ');
        closure[command](value);
    }    
}

manipulateString(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print'])
manipulateString(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print'])
