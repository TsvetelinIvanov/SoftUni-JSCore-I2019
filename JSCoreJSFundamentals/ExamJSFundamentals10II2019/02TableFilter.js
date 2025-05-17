function showWantedData(matrixTable, command) {
    let commandArray = command.split(/\s+/);
    //let commandArray = command.split(/[ ]+/);
    //let commandArray = command.split(' ');    

    switch(commandArray[0]) {
        case 'hide':
            hide(matrixTable, commandArray);
            break;
        case 'sort':
            sortTable(matrixTable, commandArray);
            break;
        case 'filter':
            filterTable(matrixTable, commandArray);
            break;
    }

    function hide(table, commandArray) {
        let indexToDelete = table[0].indexOf(commandArray[1]);
        for (let row of table) {
            row = row.splice(indexToDelete, 1);
        }

        printTable(table);
    }

    function sortTable(table, commandArray) {
        let searchedHeadingIndex = table[0].indexOf(commandArray[1]);
        let newTable = [];        
        let valuesToSort = [];
        for (let i = 0; i < table.length; i++) {
            if (i !== 0) {
                valuesToSort.push(table[i][searchedHeadingIndex]);              
            }
            else {
                newTable.push(table[i]);
            }         
        }

        valuesToSort.sort();
        for (let sortingValue of valuesToSort) {
            for (let i = 0; i < table.length; i++) {
                if (i !== 0) {                
                    table[i].forEach((v, index) => {                    
                        if (index === searchedHeadingIndex && v === sortingValue){                     
                            newTable.push(table[i]);
                        }
                    })
                }                
            }
        }
        
        printTable(newTable);
    }

    function filterTable(table, commandArray) {
        let searchedHeadingIndex = table[0].indexOf(commandArray[1]);
        let newTable = [];
        for (let i = 0; i < table.length; i++) {
            if (i !== 0) {                
                table[i].forEach((v, index) => {                    
                    if (index === searchedHeadingIndex && v === commandArray[2]) {                     
                        newTable.push(table[i]);
                    }
                })
            }
            else {
                newTable.push(table[i]);
            }         
        }

        printTable(newTable);
    }

    function printTable(table) {
        for (let row of table) {
            console.log(row.join(' | '));
        }
    }
}

showWantedData([['name', 'age', 'grade'], ['Peter', '25', '5.00'], ['George', '34', '6.00'], ['Marry', '28', '5.49']], 'sort name')
showWantedData([['name', 'age', 'grade'], ['Peter', '25', '5.00'], ['George', '34', '6.00'], ['Marry', '28', '5.49']], 'hide age')
showWantedData([['firstName', 'age', 'grade', 'course'], ['Peter', '25', '5.00', 'JS-Core'], ['George', '34', '6.00', 'Tech'], ['Marry', '28', '5.49', 'Ruby']], 'filter firstName Marry')
