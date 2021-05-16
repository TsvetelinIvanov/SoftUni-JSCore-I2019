function solve() {
  let input = document.getElementById('str').value;   
  convertFromAndToAscii(input);

  function convertFromAndToAscii(input){
    let resultElement = document.getElementById('result');
    let splitedInput = input.split(' ').filter(w => w !== '');
    let output = '';
    for(let element of splitedInput){      
      if (Number(element)){        
        output += String.fromCharCode(element);        
      } else {
        let numbersFromCharacters = [];
        for (let i = 0; i < element.length; i++) {
          numbersFromCharacters.push(element[i].charCodeAt(0));          
        }
        let p = document.createElement('p');
        p.textContent = numbersFromCharacters.join(' ');
        resultElement.appendChild(p);
      }
    }
    let p = document.createElement('p');
    p.textContent = output;
    resultElement.appendChild(p);
  }
}