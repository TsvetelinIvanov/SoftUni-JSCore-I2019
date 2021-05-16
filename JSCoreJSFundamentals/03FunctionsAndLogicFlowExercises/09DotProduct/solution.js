function solve() {
    let firstMatrix = JSON.parse(document.getElementById('mat1').value);
    let secondMatrix = JSON.parse(document.getElementById('mat2').value);
    let secondMatrixTransposed = transpose(secondMatrix);    
    let resultElement = document.getElementById('result');
    let result = multiplyMatrices(firstMatrix, secondMatrixTransposed);
    for (let i = 0; i < result.length; i++) {
        let p = document.createElement('p');
        resultElement.appendChild(p);
        p.textContent = result[i].join(', ');
    }

    function transpose(matrix){
        return matrix[0].map((col, i) => matrix.map(row => row[i]));
    }

    function multiplyMatrices(m1, m2){
        let resultMatrix = [];
        for (let i = 0; i < m1.length; i++) {
            resultMatrix[i] = [];
            for (let j = 0; j < m2[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < m1[0].length; k++) {
                    sum += m1[i][k] * m2[k][j];                    
                }
                resultMatrix[i][j] = sum;
            }
        }

        return resultMatrix;
    }
}