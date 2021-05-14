function convertToCoins(amount, coinsArray){
    let orderedCoinsArray = coinsArray.sort((a,b) => b - a);
    let convertedCoins = [];
    for(let coin of orderedCoinsArray){
        while(amount >= coin){
            convertedCoins.push(coin);
            amount -= coin;
        }
    }

    console.log(convertedCoins.join(", "));
}

convertToCoins(46, [10, 25, 5, 1, 2])
convertToCoins(123, [5, 50, 2, 1, 10])