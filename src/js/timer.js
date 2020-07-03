const btnStart = document.querySelector('.timer__button-start-stop');
const btnReset = document.querySelector('.timer__button-reset');
const textField = document.querySelector('.timer__display');
let startClick = 2;
let startTime;
let timeTick = 0;

function runStopwatch() {
    timeTick++;
    textField.textContent = (timeTick / 100).toFixed(2) + " s";
}
let indexInterval;

function stopwatchRunPause() {
    startClick++;
    switchStartPause();
    if (startClick % 2 !== 0) {
        indexInterval = setInterval(runStopwatch, 10);
        runStopwatch();
    } else clearInterval(indexInterval);
}

function resetStopwatch() {
    startClick = 2;
    textField.textContent = "---";
    switchStartPause();
    clearInterval(indexInterval)
    timeTick = 0;
}

function switchStartPause() {
    startClick % 2 !== 0 ? btnStart.textContent = "Pause" : btnStart.textContent = "Start";
}

btnStart.addEventListener('click', stopwatchRunPause);
btnReset.addEventListener('click', resetStopwatch);