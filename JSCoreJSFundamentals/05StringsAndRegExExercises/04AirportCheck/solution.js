function solve() {
    let inputString = document.getElementById('str').value;
    let [aiportData, neededInformation] = inputString.split(',');
    neededInformation = neededInformation.trim();

    let namePattern = / [A-Z][a-zA-Z]*(-[A-Z][a-zA-Z]*\.)?-[A-Z][a-zA-Z]* /g;
    let airportPattern = / ([A-Z]{3})\/([A-Z]{3}) /g;
    let flightPattern = / [A-Z]{1,3}\d{1,5} /g;
    let companyPattern = /- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]* /g;

    let name = namePattern.exec(aiportData)[0].trim().replace('-', ' '); 
    // let name = namePattern.exec(input)[0].trim().replace(/-/g, ' ');
    // let name = namePattern.exec(aiportData)[0].trim().replace(/-/g, ' ');
    let flight = flightPattern.exec(aiportData)[0].trim();
    let company = companyPattern.exec(aiportData)[0].replace('-', '').trim().replace('*', ' ');
    let airport = airportPattern.exec(aiportData);

    let resultElement = document.getElementById('result');
    switch (neededInformation) {
        case 'name':
            resultElement.textContent = `Mr/Ms, ${name}, have a nice flight!`;
            break;
        case 'flight':
            resultElement.textContent = `Your flight number ${flight} is from ${airport[1]} to ${airport[2]}.`;
            break;
        case 'company':
            resultElement.textContent = `Have a nice flight with ${company}.`;
            break;
        case 'all':
            resultElement.textContent = `Mr/Ms, ${name}, your flight number ${flight} is from ${airport[1]} to ${airport[2]}. Have a nice flight with ${company}.`;
            break;
    }
}
