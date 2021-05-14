function humanizeNumbersInText(inputString){
    let inputArray = inputString.split(/[., ]+/);
    //console.log(inputArray);
    inputArray = inputArray.filter(w => w.length > 0);
    //console.log(inputArray);
    let numbers = []; 
    for(let word of inputArray){
        let number = Number(word);
        if(!Number.isNaN(number)){
            numbers.push(number);
        }
    }     
    //console.log(numbers);
   
    for(let number of numbers){
        numberString = number.toString();                
        let lastDiditString = numberString[numberString.length - 1];        
        let lastButOneDigitString = numberString[numberString.length - 2];
        
        if (numberString.length > 1 && lastButOneDigitString == 1){
            number = `${number}th`
        }
        else if(lastDiditString == 1)
        {
            number = `${number}st`;
        }
        else if(lastDiditString == 2){
            number = `${number}nd`;
        }
        else if(lastDiditString == 3){
            number = `${number}rd`
        }
        else{
            number = `${number}th`
        }

        console.log(number);
    }
}

 humanizeNumbersInText('The school has 256 students. In each class there are 26 chairs, 13 desks and 1 board.')
 humanizeNumbersInText('Yesterday I bought 12 pounds of peppers, 3 kilograms of carrots and 5 kilograms of tomatoes.')
 humanizeNumbersInText('Yesterday I bought 121 pounds of peppers, 32 kilograms of carrots and 513 kilograms of tomatoes.')