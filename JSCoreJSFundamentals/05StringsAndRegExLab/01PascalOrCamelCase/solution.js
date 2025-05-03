function solve() {
    let input = document.getElementById('str1').value;
    let currentCase = document.getElementById('str2').value;  
    doPasscalOrCamelCase(input, currentCase);  

    function doPasscalOrCamelCase(input, currentCase) {
        let splitedInput = input.toLowerCase().split(' ').filter(w => w !== '');  
        let output = '';
        if (currentCase === 'Pascal Case') {
            for (let word of splitedInput) {
                if (word[0] !== word[0].toUpperCase()) {
                    word = word.replace(word[0], word[0].toUpperCase());
                }
              
                 output += word;
            }
         }
         else if (currentCase === 'Camel Case') {
             for (let word of splitedInput) {
                 if (word[0] !== word[0].toUpperCase()) {
                     word = word.replace(word[0], word[0].toUpperCase());
                 }
               
                 output += word;
             }
           
             output = output.replace(output[0], output[0].toLowerCase())
        }
        else {
            output = 'Error!'
        }
      
        console.log(output)
        document.getElementById('result').innerHTML = output;
    }
}
