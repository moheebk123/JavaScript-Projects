const loader = document.getElementById("preloader");
const container = document.getElementById("container");
const startBtn = document.getElementById("start-button");
const newGameBtn = document.getElementById("new-game");
const welcomePage = document.getElementById("welcome-page");
const gamePage = document.getElementById("game-page");
const result = document.getElementById("result");
const userGuess = document.getElementById("number-input");
const attemptsLeft = document.getElementById("attempts-left");
const guesses = document.getElementById("guesses");
newGameBtn.style.display = "none";

let audio = new Audio("./assets/sound.wav");
let computerGuess;
let count = 10;
const init = () => (computerGuess = Math.floor(Math.random() * 100));

startBtn.addEventListener("click", () => {
  welcomePage.style.display = "none";
  gamePage.style.display = "flex";
  init();
  audio.play();
});

newGameBtn.addEventListener("click", () => {
  welcomePage.style.display = "flex";
  gamePage.style.display = "none";
  newGameBtn.style.display = "none";
  userGuess.value = "";
  result.innerHTML = "";
  audio.play();
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Enter" &&
    userGuess.value <= 100 &&
    userGuess.value > 0 &&
    count > 0
  ) {
    let guess = `<div>${userGuess.value}</div>`;
    guesses.insertAdjacentHTML("beforeend", guess);
    count--;
    if (count == 0 && userGuess != computerGuess) {
      userGuess.value = "";
      userGuess.setAttribute("disable", true);
      result.innerHTML = `You Loose!! Correct no. is ${computerGuess}`;
      count = 10;
      guesses.innerHTML = ``;
      newGameBtn.style.display = "block";
    } else if (computerGuess < userGuess.value) {
      result.innerHTML = `Your guess is High`;
    } else if (computerGuess > userGuess.value) {
      result.innerHTML = `Your guess is Low`;
    } else if (computerGuess == userGuess.value) {
      result.innerHTML = `It is Correct`;
      count = 10;
      guesses.innerHTML = ``;
      newGameBtn.style.display = "block";
    }
    attemptsLeft.innerHTML = count;

    result.style.display = "block";
  }
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});
