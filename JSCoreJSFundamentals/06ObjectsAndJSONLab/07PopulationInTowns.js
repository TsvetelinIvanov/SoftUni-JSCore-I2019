function showTownsPopulation(inputArray){
    let towns = {};
    for (let i = 0; i < inputArray.length; i++) {
        let [townName, population] = inputArray[i].split(' <-> ');
        if (!towns.hasOwnProperty(townName)){
            towns[townName] = 0;
        }
        
        towns[townName] += Number(population);
    }

    for(let key in towns){
        console.log(key + ' : ' + towns[key]);
    }
}

showTownsPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000'])
showTownsPopulation(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925',  'Istanbul <-> 1000'])