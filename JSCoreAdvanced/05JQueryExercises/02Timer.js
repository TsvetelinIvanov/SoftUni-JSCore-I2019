function timer() {
    let $startTimerButton = $('#start-timer');
    $startTimerButton.on('click', startTimer);
    let $stopTimerButton = $('#stop-timer');
    $stopTimerButton.on('click', stopTimer);

    let isRunning = false;
    let timerInterval;
    let timeInSeconds = 0;

    function startTimer(){
        if (!isRunning) {
            timerInterval = setInterval(runTime, 1000);
            isRunning = true;
        }
    }

    function stopTimer() {
        clearInterval(timerInterval);
        isRunning = false;        
    }
    
    function runTime() {
        timeInSeconds++;
        let hours = Math.trunc(timeInSeconds / 3600);
        if (hours <= 9) {
            hours = '0' + hours;
        }
        
        let minutes = Math.trunc((timeInSeconds % 3600) / 60);
        if (minutes <= 9) {
            minutes = '0' + minutes;
        }
        //let seconds = (timeInSeconds % 3600) % 60;
        let seconds = timeInSeconds % 60;
        if (seconds <= 9) {
            seconds = '0' + seconds;
        }

        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    }
}
