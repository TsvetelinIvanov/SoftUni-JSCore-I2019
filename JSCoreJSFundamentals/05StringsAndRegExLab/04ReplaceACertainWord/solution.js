function solve() {
  let inputArray = JSON.parse(document.getElementById('arr').value);
  let wordToReplacing = document.getElementById('str').value;
  replaceWord(inputArray, wordToReplacing);

  function replaceWord(arr, replacement){
    let resultElement = document.getElementById('result');
    let wordToReplaced = arr[0].split(' ').filter(w => w !== '')[2];
    let regex = new RegExp(wordToReplaced, 'gi');
    for (let element of arr){
      element = element.replace(regex, replacement);
      let p = document.createElement('p');
      p.textContent = element;
      resultElement.appendChild(p);
    }
  }
}