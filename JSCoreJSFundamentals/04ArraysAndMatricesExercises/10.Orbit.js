function showOrbit(arr) {
    let colsCount = arr[0];
    let rowsCount = arr[1];
    let starRow = arr[2];
    let starCol = arr[3];
    
    let screenMatrix = [];
    for (let row = 0; row < rowsCount; row++) {
        screenMatrix[row] = [];
        for (let col = 0; col < colsCount; col++) {
            screenMatrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;            
        }        
    }

    for (let row of screenMatrix) {
        console.log(row.join(' '));
    }
}

showOrbit([4, 4, 0, 0])
showOrbit([5, 5, 2, 2])
showOrbit([3, 3, 2, 2])
