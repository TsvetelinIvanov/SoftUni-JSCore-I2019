function validate() {
    document.querySelector('#exercise>fieldset>div>button').addEventListener('click', checkValidNumber);

    function checkValidNumber() {
        let input = document.querySelector('#exercise>fieldset>div>input').value;
        let lastDigit = Number(input[input.length - 1]);
        let weightArray = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            let inputDigit = input[i];
            let weightDigit = weightArray[i];
            sum += inputDigit * weightDigit;            
        }

        let reminder = sum % 11;
        if (reminder === 10){
            reminder = 0;
        }

        let response = document.getElementById('response');
        if (lastDigit === reminder) {
            response.textContent = 'This number is Valid!';
        }
        else {
            response.textContent = 'This number is NOT Valid!';
        }
    }
}
