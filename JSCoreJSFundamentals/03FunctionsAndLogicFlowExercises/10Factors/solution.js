function solve() {
   let number = Number(document.getElementById('num').value);
   let resultElement = document.getElementById('result');
   resultElement.textContent = getFactors(number);

   function getFactors(number) {
      let factors = [];
      for (let i = 1; i <= number; i++) {
         if (number % i === 0) {
            factors.push(i);
         }                  
      }

      return factors.join(' ');
   }
}
