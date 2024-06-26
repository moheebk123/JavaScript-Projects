const number = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter > 65) {
    clearInterval();
  } else {
    number.innerHTML = counter + "%";
    counter += 1;
  }
}, 40);
