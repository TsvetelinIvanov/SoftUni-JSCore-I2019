function solve() {
  let input = document.getElementById('arr').value;  
  let inputArray = JSON.parse(input);
  let resultElement = document.getElementById('result');
  let key = inputArray.shift();  
  let keyRegex = new RegExp(`((?<=(\\s)${key})|(?<=^${key}))\\s+([A-Z!%$#]{8,})([\\s.,]|$)`, 'gi');
  let resultRow;
  let resultArray = [];
  let caseChecker = /[a-z]+/g;
  for (let i = 0; i < inputArray.length; i++) {
    resultArray[i] = inputArray[i];
    while(resultRow = keyRegex.exec(inputArray[i])){
      if(!caseChecker.exec(resultRow[3])){
      inputArray[i] = inputArray[i].replace(resultRow[3], decode(resultRow[3]));
      resultArray[i] = inputArray[i];
      }
    }
  }  

  for(let row of resultArray){
    let p = document.createElement('p');
    p.textContent = row;
    resultElement.appendChild(p);
  }

  function decode(encoded){
    encoded = encoded.toLowerCase();
    if(encoded.includes('!')){
      encoded = encoded.replace('!', '1');
    }

    if(encoded.includes('%')){
      encoded = encoded.replace('%', '2');
    }

    if(encoded.includes('#')){
      encoded = encoded.replace('#', '3');
    }

    if(encoded.includes('$')){
      encoded = encoded.replace('$', '4');
    }

    return encoded;
  }
} 