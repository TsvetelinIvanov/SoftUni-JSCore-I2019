function getArgumentsInfo() {
    let typeCounts = {};
    for (let i = 0; i < arguments.length; i++) {
        let argument = arguments[i];
        let type = typeof arguments[i];
        console.log(type + ': ' + argument);
        
        if (!typeCounts[type]) {
            typeCounts[type] = 0;
        }

        typeCounts[type]++;
    }

    let sortedTypeCounts = [];
    for (let type in typeCounts) {
        sortedTypeCounts.push([type, typeCounts[type]]);
    }
    
    sortedTypeCounts.sort((a, b) => b[1] - a[1]);

    for (let typeAndCount of sortedTypeCounts) {
        console.log(typeAndCount[0] + ' = ' + typeAndCount[1]);
    }
}

getArgumentsInfo('cat', 42, function() { console.log('Hello world!'); }, 19)
