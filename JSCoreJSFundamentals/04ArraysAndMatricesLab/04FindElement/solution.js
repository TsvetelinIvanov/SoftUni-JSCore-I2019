function solve() {
  let number = Number(document.getElementById('num').value);
  let inputArray = JSON.parse(document.getElementById('arr').value);
  let answer = findIfSearchedExist(number, inputArray);
  document.getElementById('result').innerHTML = answer;
  
  function findIfSearchedExist(searched, input){
    let result = [];
    for(let element of input){
      let isSearchedExist = element.includes(searched);
      let index = element.indexOf(searched);
      result.push(isSearchedExist + ' -> ' + index);
    }

    return result;
  }
}