function solve() {
    let inputArray = JSON.parse(document.getElementById('arr').value);
    extractUserData(inputArray);

    function extractUserData(arr) {
        let resultElement = document.getElementById('result');
        let pattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 \d{1} \d{3} \d{3}|\+359-\d{1}-\d{3}-\d{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/;
        let match;
        for(let data of arr) {
            match = pattern.exec(data);
            if(match) {
                let p1 = document.createElement('p');
                p1.textContent = `Name: ${match[1]}`;
                resultElement.appendChild(p1);
              
                let p2 = document.createElement('p');
                p2.textContent = `Phone Number: ${match[2]}`;
                resultElement.appendChild(p2);
              
                let p3 = document.createElement('p');
                p3.textContent = `Email: ${match[3]}`;
                resultElement.appendChild(p3);
            } 
            else {
                let pError = document.createElement('p');
                pError.textContent = 'Invalid data';
                resultElement.appendChild(pError);
            }

            let pDashes = document.createElement('p');
            pDashes.textContent = '- - -';
            resultElement.appendChild(pDashes);
        }
    }
}
