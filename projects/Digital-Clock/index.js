let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
const time = () => {
  let curTime = new Date();
  hours.innerHTML = curTime.getHours();
  minutes.innerHTML = curTime.getMinutes();
  seconds.innerHTML = curTime.getSeconds();
  setInterval(() => {
    time();
  }, 1000);
};
time();
