function findCommonNumbers(array1, array2, array3) {
    let commonNumbers = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && array3.includes(array1[i])) {
            commonNumbers.push(array1[i]);
        }
    }
    
    commonNumbers = commonNumbers.sort();

    let commonNumbersSum = 0;
    for (let i = 0; i < commonNumbers.length; i++) {
        commonNumbersSum += commonNumbers[i];
    }

    let commonNumbersAverage = commonNumbersSum / commonNumbers.length;
    
    let commonNumbersMedian = 0;
    let middle = Math.floor((commonNumbers.length - 1) / 2)
    if ((commonNumbers.length - 1) % 2 === 0) {
        commonNumbersMedian = commonNumbers[middle];
    }
    else {
        commonNumbersMedian = (commonNumbers[middle] + commonNumbers[middle + 1]) / 2.0;
    }

    console.log(`The common elements are ${commonNumbers.join(", ")}.`)
    console.log(`Average: ${commonNumbersAverage}.`);
    console.log(`Median: ${commonNumbersMedian}.`);
}

findCommonNumbers([5, 6, 50, 10, 1, 2], [5, 4, 8, 50, 2, 10], [5, 2, 50]);
findCommonNumbers([1, 2, 3, 4, 5], [3, 2, 1, 5, 8], [2, 5, 3, 1, 16]);
