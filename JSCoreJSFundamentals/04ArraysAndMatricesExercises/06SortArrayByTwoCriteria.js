function sortArray(arr) {
    arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    });
    
    console.log(arr.join('\n'));
}

sortArray(['alpha', 'beta', 'gamma'])
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortArray(['test', 'Deny', 'omen', 'Default'])
sortArray(['Atest', 'Adeny', 'aomen', 'Default'])
