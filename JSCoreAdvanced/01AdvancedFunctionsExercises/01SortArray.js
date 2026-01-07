function sortArray(inputArray, sortOrder) {
    // if (sortOrder === 'asc') {
    //     return inputArray.sort((a, b) => a - b);
    // } else if (sortOrder === 'desc') {
    //     return inputArray.sort((a, b) => b - a);
    // }

    let ascendingComparator = function(a, b) {
        return a - b;
    }

    let descendingComparator = function(a, b) {
        return b - a;
    }

    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    }

    return inputArray.sort(sortingStrategies[sortOrder]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))

