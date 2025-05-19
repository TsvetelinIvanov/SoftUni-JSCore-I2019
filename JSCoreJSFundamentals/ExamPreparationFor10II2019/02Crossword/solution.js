function solve() {
   let inputElement = document.getElementById('input');
   let buttons = document.getElementsByTagName('button');
   let fifterButton = buttons[0];
   let sortButton = buttons[1];
   let rotateButton = buttons[2];
   let getButton = buttons[3];
   //let outputP = document.getElementById('output').firstChild;
   let outputP = document.getElementById('output').children[0];

   fifterButton.addEventListener('click', filter);
   sortButton.addEventListener('click', sort);
   rotateButton.addEventListener('click', rotate);
   getButton.addEventListener('click', get);

   function filter() {
      let splittedInput = inputElement.value.split('');      
      //let splittedInput = document.getElementById('input').value.split('');      
      let secondCommand = document.getElementById('filterSecondaryCmd').value;
      let indexPosition = Number(document.getElementById('filterPosition').value) - 1;
      switch(secondCommand) {
         //case 'UPPERCASE': 
         case 'uppercase': 
         //outputP.textContent += splittedInput.filter(c => c === c.toUpperCase() && !Number(c))[indexPosition];
         outputP.textContent += splittedInput.filter(c => c === c.toUpperCase() && isNaN(c))[indexPosition];
         break;
         //case 'LOWERCASE':
         case 'lowercase':
         //outputP.textContent += splittedInput.filter(c => c === c.toLowerCase() && !Number(c))[indexPosition];
         outputP.textContent += splittedInput.filter(c => c === c.toLowerCase() && isNaN(c))[indexPosition];
         break;
         //case 'NUMS':
         case 'nums':
         //outputP.textContent += splittedInput.filter(c => Number(c))[indexPosition];
         outputP.textContent += splittedInput.filter(c => !isNaN(c))[indexPosition];
         break;
      }
   }

   function sort() {
      //let splittedInput = inputElement.value.split('').sort();
      //let splittedInput = inputElement.value.split('').sort((a, b) => a.localeCompare(b));
      let splittedInput = inputElement.value.split('');
      let secondCommand = document.getElementById('sortSecondaryCmd').value;
      let indexPosition = Number(document.getElementById('sortPosition').value) - 1;
      // if (secondCommand === 'Z'){
      //    splittedInput = splittedInput.reverse();
      // }
      if (secondCommand === 'A'){
         splittedInput.sort((a, b) => a.localeCompare(b));
      }
      else {
         splittedInput.sort((a, b) => b.localeCompare(a));
      }
      
      outputP.textContent += splittedInput[indexPosition];      
   }

   function rotate() {
      let splittedInput = inputElement.value.split('');
      let secondCommand = document.getElementById('rotateSecondaryCmd').value;
      let indexPosition = Number(document.getElementById('rotatePosition').value) - 1;
      for (let i = 0; i < secondCommand % splittedInput.length; i++) {
         splittedInput.unshift(splittedInput.pop());
      }
      
      outputP.textContent += splittedInput[indexPosition];
   }

   function get() {      
      //let input = inputElement.value.split('');
      let input = inputElement.value;
      let indexPosition = Number(document.getElementById('getPosition').value) - 1;
      outputP.textContent += input[indexPosition];      
   }
} 
