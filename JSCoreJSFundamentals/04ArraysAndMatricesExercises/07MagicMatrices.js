function checkIfMatrixIsMagic(matrix){
    let firstRowSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            rowSum += matrix[row][col];                                   
        }
        if (row === 0){
            firstRowSum = rowSum;
        } else if (firstRowSum !== rowSum){
            return false;
        }         
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
           colSum += matrix[row][col];            
        }
        if (firstRowSum !== colSum){
            return false;
        }        
    }

    return true;
}

console.log(checkIfMatrixIsMagic([[4, 5, 6], [6, 5, 4], [5, 5, 5]]))
console.log(checkIfMatrixIsMagic([[11, 32, 45], [21, 0, 1], [21, 1, 1]]))
console.log(checkIfMatrixIsMagic([[1, 0, 0], [0, 0, 1], [0, 1, 0]]))