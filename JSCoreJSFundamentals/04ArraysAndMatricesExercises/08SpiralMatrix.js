function doSpiralMatrix(rowsCount, colsCount) {
    let totalCellsCount = rowsCount * colsCount;
    let spiralMatrix = [];
    for (let i = 0; i < rowsCount; i++) {
        let rowArray = [];
        for (let j = 0; j < colsCount; j++) {
            rowArray.push(0);            
        }
        
        spiralMatrix.push(rowArray);                
    }
    
    let row = 0;
    let col = 0;
    let step = 0;
    for (let i = 0; i < totalCellsCount;) {
        while (col + step < colsCount) {
            i++;
            spiralMatrix[row][col] = i;
            col++;
        }
        
        col--;
        row++;
        while (row + step < rows) {
            i++;
            spiralMatrix[row][col] = i;
            row++;
        }
        
        row--;
        col--;
        while (col >= step) {
            i++;
            spiralMatrix[row][col] = i;
            col--;
        }
        
        col++;
        row--;
        step++;
        while (row >= step) {
            i++;
            spiralMatrix[row][col] = i;
            row--;
        }
        
        row++;
        col++;                
    }

    for (let rowArray of spiralMatrix) {
        console.log(rowArray.join(' '));
    }
}

doSpiralMatrix(5, 5)
doSpiralMatrix(3, 3)
doSpiralMatrix(10, 10)
