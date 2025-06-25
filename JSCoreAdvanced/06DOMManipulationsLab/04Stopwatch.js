function stopwatch() {
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);

    let time = 0;
    let timeInterval;

    function startTimer() {
        //time = 0;
        document.getElementById('time').textContent = '00:00';
        timeInterval = setInterval(runTime, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }

    function stopTimer() {
        clearInterval(timeInterval);
        stopBtn.disabled = true;
        startBtn.disabled = false;
    }
    
    function runTime() {
        time++;
        let seconds = time % 60;
        if(seconds <= 9) {
            seconds = '0' + seconds;
        }

        let minutes = Math.trunc(time / 60);
        if (minutes <= 9) {
            minutes = '0' + minutes; 
        }

        document.getElementById('time').textContent = minutes + ':' + seconds;
    }
}
