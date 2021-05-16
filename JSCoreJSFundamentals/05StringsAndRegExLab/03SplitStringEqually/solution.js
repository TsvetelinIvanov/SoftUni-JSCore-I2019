function solve() {
  let string = document.getElementById('str').value;
  let number = Number(document.getElementById('num').value);
  splitStringEqually(string, number);

  function splitStringEqually(string, number){    
    let outputArray = [];    
    if (string.length % number !== 0){
      let stringLength = string.length;
      let symbolsCount = 0;
      while(stringLength % number !== 0){
        stringLength %= number;
        stringLength++;
        symbolsCount++;
      }

      for (let i = 0; i < symbolsCount; i++) {
        string +=string[i];                
      }
    }

    for (let i = 0; i < string.length; i += number) {
      outputArray.push(string.substr(i, number));      
    }
    document.getElementById('result').innerHTML = outputArray.join(' ');
  }
}