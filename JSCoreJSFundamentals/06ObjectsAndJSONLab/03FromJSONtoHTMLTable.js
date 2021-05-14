function makeFromJSONtoHTMLTable(inputString) {
    let inputObjectsArray = JSON.parse(inputString);
    let outputString = '<table>\n';
    for (let object of inputObjectsArray) {
        outputString += '<tr>'
        for (let key in object) {
            outputString += `<th>${key}</th>`;
        }
        outputString += '</tr>\n';
        break;
    }

    for (let object of inputObjectsArray) {
        outputString += '<tr>'
        for (let key in object) {
            let value = object[key];            
            if (!Number(value)) {
                value = value.replace(/&/g, '&amp;');
                value = value.replace(/</g, '&lt;');
                value = value.replace(/>/g, '&gt;');
                value = value.replace(/"/g, '&quot;');
                value = value.replace(/'/g, '&#39;');                
            }
            outputString += `<td>${value}</td>`;
        }
        outputString += '</tr>\n';
    }

    outputString += '</table>';

    console.log(outputString);
}

makeFromJSONtoHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')
makeFromJSONtoHTMLTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"}, {"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]')