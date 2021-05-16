function solve() {
  let degreeNumber = Number(document.getElementById('num1').value);
  let type = document.getElementById('type').value;
  let result = '';
  let convertedTemperature = 0;
  let isTypeCorrect = false;

  convert();
  showResult()
  document.getElementById('result').innerHTML = result;

  function convert(){
    if (type.toLowerCase() === 'fahrenheit'){
      convertedTemperature = ((degreeNumber - 32) * 5) / 9;
      isTypeCorrect = true;
    } else if (type.toLowerCase() === 'celsius'){
      convertedTemperature = ((degreeNumber * 9) / 5) + 32;
      isTypeCorrect = true;
    }
  }

  function showResult(){
    if (isTypeCorrect){
      result = Math.round(convertedTemperature);
    } else {
      result = 'Error!';
    }
  }
}