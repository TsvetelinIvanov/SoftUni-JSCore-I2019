function leapYear() {
    let button = document.querySelector('#exercise>button');
    button.addEventListener('click', checkYear);

    function checkYear() {
        let input = document.querySelector('#exercise>input');
        let outputText = '';
        if (checkLeapYear(Number(input.value))) {
            outputText = 'Leap Year';
        } 
        else {
            outputText = 'Not Leap Year'
        }

        console.log(checkLeapYear(Number(input.value)));

        let yearDiv = document.querySelector('#year');
        let yearDivH2 = yearDiv.querySelector('h2');
        let yearDivtDiv = yearDiv.querySelector('div');

        yearDivH2.textContent = outputText;
        yearDivtDiv.textContent = input.value;
        input.value = '';
    }

    function checkLeapYear(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
}
