function extractPerfectNumbers(numbers) {
    let perfectNumbers = [];
    for (let number of numbers) {
        let lastDivisor = Math.floor(number / 2);
        let divisorsSum = 0;
        for (let i = 1; i <= lastDivisor; i++) {
            if (number % i === 0) {
                divisorsSum += i;
            }
        }

        if (number === divisorsSum) {
            perfectNumbers.push(number);
        }
    }

    if (perfectNumbers.length >= 1) {
        console.log(perfectNumbers.join(", "));
    }
    else {
        console.log("No perfect number");
    }
}

extractPerfectNumbers([5, 6, 28])
extractPerfectNumbers([5, 32, 82])
