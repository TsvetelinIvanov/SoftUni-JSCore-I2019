function aggregate(numbers) {
    let sum = numbers.reduce((a, b) => a + b);
    let min = numbers.reduce((a, b) => Math.min(a, b));
    let max = numbers.reduce((a,b) => Math.max(a, b));
    let product = numbers.reduce((a, b) => a * b);
    let joined = numbers.reduce((a, b) => '' + a + b);

    let resultString = `Sum = ${sum}\nMin= ${min}\nMax = ${max}\nProduct = ${product}\nJoin = ${joined}`;

    console.log(resultString);
}

aggregate([2, 3, 10, 5])
aggregate([5, -3, 20, 7, 0.5])
