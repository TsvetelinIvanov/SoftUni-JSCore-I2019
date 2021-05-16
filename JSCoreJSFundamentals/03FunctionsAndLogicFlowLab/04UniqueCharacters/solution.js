function solve() {
  let string = document.getElementById('string').value;
  let uniqueCharacters = '';

  fillUniqueCharacters(string);
  document.getElementById('result').innerHTML = uniqueCharacters;

  function fillUniqueCharacters(string){
    for (let i = 0; i < string.length; i++) {
      adWhiteSpaces(i);
      addUniqueCharacters(i);      
    }
  }

  function adWhiteSpaces(i){
    if (string[i] === ' '){
      uniqueCharacters += string[i];
    }
  }

  function addUniqueCharacters(i){
    if (uniqueCharacters.indexOf(string[i]) === -1){
      uniqueCharacters += string[i];
    }
  }
}