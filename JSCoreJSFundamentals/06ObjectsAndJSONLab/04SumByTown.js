function sumTownsIncome(stringArray) {    
    let townIncomes = {};
    for (let i = 0; i < stringArray.length; i += 2) {
        let town = stringArray[i];
        let income = Number(stringArray[i + 1]);
        //if (!(town in townIncomes)) {
        if (!townIncomes.hasOwnProperty(town)) {
            townIncomes[town] = 0;
        }
        
        townIncomes[town] += income;
    }

    console.log(JSON.stringify(townIncomes));
}

sumTownsIncome(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
sumTownsIncome(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);
