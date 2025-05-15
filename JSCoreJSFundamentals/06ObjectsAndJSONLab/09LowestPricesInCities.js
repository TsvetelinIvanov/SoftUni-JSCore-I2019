function findTheLowestPrice(priceArray) {
    let products = {};
    for (let priceData of priceArray) {
        let [townName, productName, price] = priceData.split(' | ');
        if (!products.hasOwnProperty(productName)) {
            products[productName] = {};
        }

        products[productName][townName] = Number(price);
    }

    let lowestPrices = [];

    for (let product in products) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let lowestPriceTown = '';

        for (let town in products[product]) {
            if(products[product][town] < lowestPrice){
                lowestPrice = products[product][town];
                lowestPriceTown = town;
            }
        }

        let lowestPriceData = `${product} -> ${lowestPrice} (${lowestPriceTown})`;
        lowestPrices.push(lowestPriceData);
    }

    console.log(lowestPrices.join('\n'));
}

findTheLowestPrice(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10'])
findTheLowestPrice(['Sofia City | Audi | 100000', 'Sofia City | BMW | 100000', 'Sofia City | Mitsubishi | 10000', 'Sofia City | Mercedes | 10000', 'Sofia City | NoOffenseToCarLovers | 0', 'Mexico City | Audi | 1000', 'Mexico City | BMW | 99999', 'New York City | Mitsubishi | 10000', 'New York City | Mitsubishi | 1000', 'Mexico City | Audi | 100000', 'Washington City | Mercedes | 1000'])
