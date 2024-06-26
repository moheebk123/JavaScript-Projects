const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const saveBtn = document.getElementById("save-time");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const stopwatchRecord = document.getElementById("stopwatch-record");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timeref;

function saveLaps() {
  localStorage.setItem("laps", stopwatchRecord.innerHTML);
}
function showLaps() {
  stopwatchRecord.innerHTML = localStorage.getItem("laps");
}
showLaps();

const saveLap = () => {
  const lap = `<div class="lap">${hour.innerHTML}:${minute.innerHTML}:${second.innerHTML}
    <button id="delete" class="btn">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>`;

  stopwatchRecord.insertAdjacentHTML("afterbegin", lap);
  saveLaps();
};

const resetTime = () => {
  seconds = 0;
  minutes = 0;
  hours = 0;

  startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  second.innerHTML = `0${seconds}`;
  minute.innerHTML = `0${minutes}`;
  hour.innerHTML = `0${hours}`;

  startBtn.classList.add("start");
  startBtn.classList.remove("pause");

  clearInterval(timeref);
  saveLaps();
};

const deleteLap = () => {
  if (event.target.classList.contains("fa-xmark")) {
    const currLap = event.target.closest(".lap");
    console.log(currLap);
    currLap.remove();
    saveLaps();
  }
};

const watch = () => {
  if (startBtn.classList.contains("start")) {
    startBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`;

    startBtn.classList.add("pause");
    startBtn.classList.remove("start");

    timeref = setInterval(() => {
      if (seconds < 10) {
        second.innerHTML = `0${seconds}`;

        if (minutes < 10) {
          minute.innerHTML = `0${minutes}`;

          if (hours < 10) {
            hour.innerHTML = `0${hours}`;
          } else {
            hour.innerHTML = `${hours}`;
          }
        } else {
          minute.innerHTML = `${minutes}`;

          if (minutes == 60) {
            minutes = 0;
            hours += 1;
            minute.innerHTML = `0${minutes}`;
          }
        }
      } else {
        second.innerHTML = `${seconds}`;

        if (minutes < 10) {
          minute.innerHTML = `0${minutes}`;

          if (hours < 10) {
            hour.innerHTML = `0${hours}`;
          } else {
            hour.innerHTML = `${hours}`;
          }
        } else {
          minute.innerHTML = `${minutes}`;

          if (hours < 10) {
            hour.innerHTML = `0${hours}`;
          } else {
            hour.innerHTML = `${hours}`;
          }

          if (minutes == 60) {
            minutes = 0;
            hours += 1;
            minute.innerHTML = `0${minutes}`;
          }
        }

        if (seconds == 60) {
          seconds = 0;
          minutes += 1;
          second.innerHTML = `0${seconds}`;
        }
      }

      seconds++;
    }, 1000);
  } else if (startBtn.classList.contains("pause")) {
    startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    startBtn.classList.add("start");
    startBtn.classList.remove("pause");
    clearInterval(timeref);
  }
};

const events = (event) => {
  if (event.key === " ") {
    watch();
  } else if (event.key === "r" || event.key === "R") {
    resetTime();
  } else if (event.key === "s" || event.key === "S") {
    saveLap();
  } else if (event.key === "d" || event.key === "D") {
    stopwatchRecord.lastElementChild.remove();
    saveLaps();
  }
};

saveBtn.addEventListener("click", saveLap);

resetBtn.addEventListener("click", resetTime);

stopwatchRecord.addEventListener("click", deleteLap);

startBtn.addEventListener("click", watch);

document.addEventListener("keydown", events);
