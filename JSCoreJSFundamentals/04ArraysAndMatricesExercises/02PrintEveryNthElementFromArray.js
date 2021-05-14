function printEveryNthElement (arr){
    let step = Number(arr.pop());
    for (let i = 0; i < arr.length; i += step) {
        console.log(arr[i]);        
    }
}

printEveryNthElement(['5', '20', '31', '4', '20', '2'])
printEveryNthElement(['dsa', 'asd', 'test', 'tset', '2'])
printEveryNthElement(['1', '2', '3', '4', '5', '6'])