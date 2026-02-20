function solve() {
    let keyword = document.getElementById('str').value;
    let inputText = document.getElementById('text').value;
    let messageRegex = new RegExp(`${keyword}(.*?)${keyword}`);
    let messageText = messageRegex.exec(inputText)[1];  
    let message = `Message: ${messageText}`;
  
    let coordinatesPattern = /(east|north).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;
    //let coordinatesPattern = /(east|north)[\s\S]*?(\d{2})[^,]*?,[^,]*?(\d{6})/gi;
    let northCoordinate = '';
    let eastCoordinate = '';
    let match;
    while ((match = coordinatesPattern.exec(inputText)) !== null) {
        if (match[1].toLowerCase() === 'north') {
            northCoordinate = `${match[2]}.${match[3]} N`;
        }
        else if (match[1].toLowerCase() === 'east') {
            eastCoordinate = `${match[2]}.${match[3]} E`;
        }
    }
  
    appendToResultElement(northCoordinate);
    appendToResultElement(eastCoordinate);
    appendToResultElement(message);

    function appendToResultElement(text) {
        let resultElement = document.getElementById('result');
        let p = document.createElement('p');
        p.textContent = text;
        resultElement.appendChild(p);
    }
}
