function solve() {
  let multipliedStartNumberElement = document.getElementById('num1');
  let multiplicationStartNumber = Number(multipliedStartNumberElement.value);
  let multiplierElement = document.getElementById('num2');
  let multiplier = Number(multiplierElement.value);
  let resultElement = document.getElementById('result');
  
  resultElement.innerHTML = '';
  findWrongInput(multiplicationStartNumber, multiplier);
  showResults(multiplicationStartNumber, multiplier)

  function findWrongInput(multiplicationStartNumber, multiplier){
    if (multiplicationStartNumber > multiplier){
      //document.getElementById('result').innerHTML = 'Try with other numbers.';
      resultElement.innerHTML = 'Try with other numbers.';
    }
  }

  function showResults(multiplicationStartNumber, multiplier){
    for (let i = multiplicationStartNumber; i <= multiplier; i++) {
      let result = i * multiplier;
      let p = document.createElement('p');
      p.innerHTML = `${i} * ${multiplier} = ${result}`;
      resultElement.appendChild(p);
    }
  }
}