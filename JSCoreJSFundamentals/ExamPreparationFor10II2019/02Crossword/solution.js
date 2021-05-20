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

   function filter(){
      let inputSplited = inputElement.value.split('');      
      //let inputSplited = document.getElementById('input').value.split('');      
      let secondCommand = document.getElementById('filterSecondaryCmd').value;
      let indexPosition = Number(document.getElementById('filterPosition').value) - 1;
      switch(secondCommand){
         //case 'UPERCASE': 
         case 'uppercase': 
         //outputP.textContent += inputSplited.filter(c => c === c.toUpperCase() && !Number(c))[indexPosition];
         outputP.textContent += inputSplited.filter(c => c === c.toUpperCase() && isNaN(c))[indexPosition];
         break;
         //case 'LOWERCASE':
         case 'lowercase':
         //outputP.textContent += inputSplited.filter(c => c === c.toLowerCase() && !Number(c))[indexPosition];
         outputP.textContent += inputSplited.filter(c => c === c.toLowerCase() && isNaN(c))[indexPosition];
         break;
         //case 'NUMS':
         case 'nums':
         //outputP.textContent += inputSplited.filter(c => Number(c))[indexPosition];
         outputP.textContent += inputSplited.filter(c => !isNaN(c))[indexPosition];
         break;
      }
   }

   function sort(){
      //let inputSplited = inputElement.value.split('').sort();
      //let inputSplited = inputElement.value.split('').sort((a, b) => a.localeCompare(b));
      let inputSplited = inputElement.value.split('');
      let secondCommand = document.getElementById('sortSecondaryCmd').value;
      let indexPosition = Number(document.getElementById('sortPosition').value) - 1;
      // if (secondCommand === 'Z'){
      //    inputSplited = inputSplited.reverse();
      // }
      if (secondCommand === 'A'){
         inputSplited.sort((a, b) => a.localeCompare(b));
      } else {
         inputSplited.sort((a, b) => b.localeCompare(a));
      }
      outputP.textContent += inputSplited[indexPosition];      
   }

   function rotate(){
      let inputSplited = inputElement.value.split('');
      let secondCommand = document.getElementById('rotateSecondaryCmd').value;
      let indexPosition = Number(document.getElementById('rotatePosition').value) - 1;
      for (let i = 0; i < secondCommand % inputSplited.length; i++) {
         inputSplited.unshift(inputSplited.pop());
      }
      outputP.textContent += inputSplited[indexPosition];
   }

   function get(){      
      //let input = inputElement.value.split('');
      let input = inputElement.value;
      let indexPosition = Number(document.getElementById('getPosition').value) - 1;
      outputP.textContent += input[indexPosition];      
   }
} 