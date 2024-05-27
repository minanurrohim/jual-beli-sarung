let timerInterval;
let seconds = 0;
let minutes = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("timer").innerText = formattedMinutes + ":" + formattedSeconds;
}

document.getElementById("startButton").addEventListener("click", startTimer);
