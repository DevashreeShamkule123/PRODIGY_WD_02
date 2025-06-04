let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function timeToString(time) {
    let hrs = Math.floor(time / 3600000);
    let mins = Math.floor((time % 3600000) / 60000);
    let secs = Math.floor((time % 60000) / 1000);

    return (
        String(hrs).padStart(2, '0') + ':' +
        String(mins).padStart(2, '0') + ':' +
        String(secs).padStart(2, '0')
    );
}

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById('display').textContent = timeToString(elapsedTime);
        }, 1000);
        isRunning = true;
    }
}

function pause() {
    clearInterval(timerInterval);
    isRunning = false;
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (isRunning) {
        const lapTime = timeToString(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = 'Lap: ' + lapTime;
        document.getElementById('laps').appendChild(lapItem);
    }
}
