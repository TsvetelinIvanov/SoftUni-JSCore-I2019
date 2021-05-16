function solve() {
  let string = document.getElementById('string').value;
  let character = document.getElementById('character').value;
  let count = 0;
  let result = '';

  findCharacterCount(string, character);
  showEvenOrOdd();
  document.getElementById('result').innerHTML = result;

  function findCharacterCount(string, character){
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character){
        count++;
      }      
    }
  }

  function showEvenOrOdd(){
    if (count % 2 === 0){
      result = `Count of ${character} is even.`;
    } else {
      result = `Count of ${character} is odd.`;
    }
  }
}