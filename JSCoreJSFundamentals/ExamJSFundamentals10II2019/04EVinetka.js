function showMostProfitableObjects(objectArray) {
    let towns = {};
    let outputText = '';
    for (let vineteData of objectArray) {
        if (!towns.hasOwnProperty(vineteData.town)) {
            towns[vineteData.town] = {[vineteData.model]: [[vineteData.price], [vineteData.regNumber]]};
        }
        else {
            if (!towns[vineteData.town].hasOwnProperty(vineteData.model)) {
                towns[vineteData.town][vineteData.model] = [[vineteData.price], [vineteData.regNumber]];
            }
            else {
                towns[vineteData.town][vineteData.model].map((m, i) => i === 0 ? m.push(vineteData.price) : m.push(vineteData.regNumber));
            }
        }
    }    

    let mostProfitableTown = Object.keys(towns).sort((a, b) => sumModelProfit(b) - sumModelProfit(a) || takeVineteSoldCount(b) - takeVineteSoldCount(a) || a.localeCompare(b))[0];
    outputText += `${mostProfitableTown} is most profitable - ${sumModelProfit(mostProfitableTown)} BGN\n`;

    let mostDrivenModel = Object.keys(towns[mostProfitableTown]).sort((a, b) => towns[mostProfitableTown][b][0].length - towns[mostProfitableTown][a][0].length || sortVinetePrices(towns[mostProfitableTown][b][0])[0] - sortVinetePrices(towns[mostProfitableTown][a][0])[0] || a.localeCompare(b))[0];
    outputText += `Most driven model: ${mostDrivenModel}\n`;

    let townsWithMostDrivenModel = Object.keys(towns).filter(t => towns[t].hasOwnProperty(mostDrivenModel)).sort();
    for (let townWithMostDrivenModel of townsWithMostDrivenModel) {
        outputText += `${townWithMostDrivenModel}: ${(towns[townWithMostDrivenModel][mostDrivenModel][1].sort()).join(', ')}\n`;
    }

    outputText = outputText.substring(0, outputText.length - 1);
    console.log(outputText);

    function sumModelProfit(town) {
        let modelProfitSum = Object.keys(towns[town]).map(m => towns[town][m][0].reduce((a, b) => a + b)).reduce((a, b) => a + b);
        
        return modelProfitSum;
    }

    function takeVineteSoldCount(town) {
        let vineteSoldCount = Object.keys(towns[town]).reduce((a, b) => towns[town][a][0].length + towns[town][b][0].length);
        
        return vineteSoldCount;
    }

    function sortVinetePrices(vinetePrices) {
        return vinetePrices.sort((a, b) => b - a);
    }
}

showMostProfitableObjects([ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2}, { model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8}, { model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9}, { model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3}, { model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3} ])
