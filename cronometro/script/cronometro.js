document.addEventListener("DOMContentLoaded", function() {
const hours1 = document.querySelector("#hours");
const minutes1 = document.querySelector("#minutes");
const seconds1 = document.querySelector("#seconds");
const milliseconds1 = document.querySelector("#milisec");
const startBtn = document.querySelector("#startbtn");
const pauseBtn = document.querySelector("#pausebtn");
const resumeBtn = document.querySelector("#resumebtn");
const resetBtn = document.querySelector("#resetbtn");


let interval;
let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  clearInterval(interval); // Clear any existing interval
  interval = setInterval(() => {
    if (!isPaused) {
      milisegundos += 10;
      if (milisegundos === 1000) {
        segundos++;
        milisegundos = 0;
      }
      if (segundos === 60) {
        minutos++;
        segundos = 0;
      }
      if (minutos === 60) {
        horas++;
        minutos = 0;
      }
      hours1.innerHTML = formatTime(horas);
      minutes1.innerHTML = formatTime(minutos);
      seconds1.innerHTML = formatTime(segundos);
      milliseconds1.innerHTML = formatMilliseconds(milisegundos);
    }
  }, 10);
  startBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
}

function pauseTimer() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "inline-block";
}

function resumeTimer() {
  isPaused = false;
  resumeBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
}

function resetTimer() {
  clearInterval(interval);
  horas = 0;
  minutos = 0;
  segundos = 0;
  milisegundos = 0;
  isPaused = false;
  hours1.innerHTML = "00";
  minutes1.innerHTML = "00";
  seconds1.innerHTML = "00";
  milliseconds1.innerHTML = "000";
  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `0${time}`.padStart(3, "0") : time;
}
});