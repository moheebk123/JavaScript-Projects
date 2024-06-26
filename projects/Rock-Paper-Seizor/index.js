const choice = [0, 1, 2];
let currentScore = 0;
let count = 0;
const generateNumber = () => Math.floor(Math.random() * choice.length);
const rock = `<i class="fa-solid fa-hand-fist rock"></i>`;
const paper = `<i class="fa-solid fa-hand paper"></i>`;
const scissor = `<i class="fa-solid fa-hand-peace scissor"></i>`;

// Score Board
const score = document.getElementById("score");

// Game Area
const game = document.getElementById("game");
const userChoice = document.getElementById("userChoice");
const computerChoice = document.getElementById("computerChoice");

// Rock Paper Scissor
const choices = document.getElementById("choices");

const button = document.querySelector("button");

choices.onclick = () => {
  const currentChoice = generateNumber();
  if (event.target.classList.contains("rock")) {
    userChoice.innerHTML = rock;

    if (currentChoice == 0) {
      computerChoice.innerHTML = rock;
      score.innerText = "DRAW";
      score.style.color = "lightsteelblue";
    } else if (currentChoice == 1) {
      computerChoice.innerHTML = paper;
      score.innerText = "LOSE";
      score.style.color = "lightcoral";
    } else {
      computerChoice.innerHTML = scissor;
      score.innerText = "WIN";
      score.style.color = "lightgreen";
    }
  } else if (event.target.classList.contains("paper")) {
    userChoice.innerHTML = paper;

    if (currentChoice == 0) {
      computerChoice.innerHTML = rock;
      score.innerText = "WIN";
      score.style.color = "lightgreen";
    } else if (currentChoice == 1) {
      computerChoice.innerHTML = paper;
      score.innerText = "DRAW";
      score.style.color = "lightsteelblue";
    } else {
      computerChoice.innerHTML = scissor;
      score.innerText = "LOSE";
      score.style.color = "lightcoral";
    }
  } else if (event.target.classList.contains("scissor")) {
    userChoice.innerHTML = scissor;

    if (currentChoice == 0) {
      computerChoice.innerHTML = rock;
      score.innerText = "LOSE";
      score.style.color = "lightcoral";
    } else if (currentChoice == 1) {
      computerChoice.innerHTML = paper;
      score.innerText = "WIN";
      score.style.color = "lightgreen";
    } else {
      computerChoice.innerHTML = scissor;
      score.innerText = "DRAW";
      score.style.color = "lightsteelblue";
    }
  }
};
