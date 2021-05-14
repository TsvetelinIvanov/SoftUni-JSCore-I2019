function printWithDelimiter(arr){
    let delimiter = arr.pop();
    console.log(arr.join(delimiter));
}

printWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-'])
printWithDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_'])