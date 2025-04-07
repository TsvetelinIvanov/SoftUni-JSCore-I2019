function validate() {
    let button = document.querySelector('#exercise>div>button');
    button.addEventListener('click', generateEGN);

    function generateEGN() {
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let year = document.getElementById('year').value;
        let yearEnding = year.slice(2);
        let months = { January: '01', February: '02', March: '03', April: '04', May: '05', June: '06', July: '07', August: '08', September: '09', October: '10', November: '11', December: '12' };
        let month = months[document.getElementById('month').value];
        let day = document.getElementById('date').value;
        if (day.length === 1) {
            day = '0' + day;
        }

        let region = document.getElementById('region').value;
        let regionBeginning = region.slice(0, 2);
        let gender = document.getElementById('male').checked ? 2 : 1;
        if (year && month && day && gender && region && year >= 1900 && year <= 2100 && region >= 43 && region <= 999) {
            let egn = yearEnding + month + day + regionBeginning + gender;
            let egnSum = 0;
            for (let i = 0; i < 9; i++) {
                egnSum += Number(egn[i]) * Number(weights[i]);
            }

            let validCheckNumber = egnSum % 11;
            if (validCheckNumber > 9) {
                validCheckNumber = 0;
            }

            egn += validCheckNumber;
            document.getElementById('egn').textContent = `Your EGN is: ${egn}`;

            document.getElementById('year').value = '';
            document.getElementById('month').value = '';
            document.getElementById('date').value = '';
            document.getElementById('male').checked = false;
            document.getElementById('female').checked = false;
            document.getElementById('region').value = '';
        }
    }
}
