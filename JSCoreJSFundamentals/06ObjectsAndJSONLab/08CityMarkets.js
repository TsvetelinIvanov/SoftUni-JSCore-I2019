function calculateProductsIncomeForTown(dataArray){
    let towns = {};
    
    for(let townData of dataArray){        
        let [townName, productName, productIncomeData] = townData.split(' -> ');        
        let productIncome = productIncomeData.split(' : ').map(Number).reduce((a, b) => a * b);

        if (!towns.hasOwnProperty(townName)){
            towns[townName] = {};
        }
        
        if (!towns[townName].hasOwnProperty(productName)){
            towns[townName][productName] = 0;
        }

        towns[townName][productName] += productIncome;        
    }

    let outputString = '';
    for(let town in towns){
        outputString += `Town - ${town}\n`;
        for(let product in towns[town]){
            outputString += `$$$${product} : ${towns[town][product]}\n`;
        }
    }
    outputString = outputString.substring(0, outputString.length - 1);

    console.log(outputString)
}

calculateProductsIncomeForTown(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3'])