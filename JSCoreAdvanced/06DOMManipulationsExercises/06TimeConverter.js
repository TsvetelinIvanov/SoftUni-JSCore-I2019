function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertTime);
    hoursBtn.addEventListener('click', convertTime);
    minutesBtn.addEventListener('click', convertTime);
    secondsBtn.addEventListener('click', convertTime);

    function convertTime(event) {
        let daysElement = document.getElementById('days');
        let hoursElement = document.getElementById('hours');
        let minutesElement = document.getElementById('minutes');
        let secondsElement = document.getElementById('seconds');

        let timeInSeconds = 0;
        switch(event.target.id) {
        //switch(this.id){
            case 'daysBtn':
            timeInSeconds = Number(daysElement.value) * 86400;
            break;
            case 'hoursBtn':
            timeInSeconds = Number(hoursElement.value) * 3600;
            break;
            case 'minutesBtn':
            timeInSeconds = Number(minutesElement.value) * 60;
            break;
            case 'secondsBtn':
            timeInSeconds = Number(secondsElement.value);
            break;
        }

        daysElement.value = timeInSeconds / 86400;
        hoursElement.value = timeInSeconds / 3600;
        minutesElement.value = timeInSeconds / 60;
        secondsElement.value = timeInSeconds
    }
}
