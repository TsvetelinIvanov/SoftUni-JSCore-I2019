function checkDiagonalsAndPrintMatrix(stringArray) {
    let matrix = stringArray.map(row => row.split(' ').map(Number));
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                firstDiagonalSum += matrix[row][col];                
            }

            if (col === matrix[row].length - 1 - row){
                secondDiagonalSum += matrix[row][col];
            }
        }
    }    

    // for (let i = 0; i < matrix.length; i++) {
    //     firstDiagonalSum += matrix[i][i];
    //     secondDiagonalSum += matrix[i][matrix[i].length - 1 - i];
    // }

    if (firstDiagonalSum === secondDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && row !== matrix[row].length - 1 - col) {
                    matrix[row][col] = firstDiagonalSum;
                }
            }
        }
    }

    printMatrix(matrix);

    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
}

checkDiagonalsAndPrintMatrix(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1'])
checkDiagonalsAndPrintMatrix(['1 1 1', '1 1 1', '1 1 0'])