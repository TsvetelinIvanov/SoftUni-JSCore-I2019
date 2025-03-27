function solve(array1, array2, array3) {
    let sumLength;
    let averageLength;
    let firstArgumentLength = array1.length;
    let secondArgumentLength = array2.length;
    let thirdArgumentLength = array3.length;
    
    sumLength = firstArgumentLength + secondArgumentLength + thirdArgumentLength;
    averageLength = Math.floor(sumLength / 3);
    
    console.log(sumLength);
    console.log(averageLength);
}
