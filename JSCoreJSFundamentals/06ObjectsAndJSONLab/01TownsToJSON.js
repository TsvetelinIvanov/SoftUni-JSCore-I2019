function doTableToObjects(stringArray) {
    let objectArray = [];
    let headings = stringArray[0].split('|').filter(h => h !== '').map(h => h.trim());
    for (let i = 1; i < stringArray.length; i++) {
        let town = {};
        let townData = stringArray[i].split('|').filter(x => x !== '').map(x => x.trim());
        town[headings[0]] = townData[0];
        let latitude; 
        let longitude;
        //if (townData[0] === 'Veliko Turnovo' || townData[0] === 'New York') {
        if (townData[0].split(' ').length === 2) {
            latitude = Number(townData[1]);
            longitude = Number(townData[2]);            
        }
        else {
            latitude = Number(Number(townData[1]).toFixed(2));
            longitude = Number(Number(townData[2]).toFixed(2));
        }
        
        town[headings[1]] = latitude;
        town[headings[2]] = longitude;
        objectArray.push(town);       
    }

    console.log(JSON.stringify(objectArray));
}

doTableToObjects(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |'])
doTableToObjects(['| Town | Latitude | Longitude |', '| Veliko Turnovo | 43.0757 | 25.6172 |', '| Monatevideo | 34.50 | 56.11 |'])
