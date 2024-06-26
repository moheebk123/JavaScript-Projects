const questions = [
  "1. Which is the capital of India?",
  "2. Which is the national animal of India?",
  "3. Which is the national bird of India?",
  "4. Which is the national flower of India?",
];

const options = [
  ["Delhi", "Uttar Pradesh", "Kerala", "Haryana"],
  ["Lion", "Tiger", "Elephant", "Giraffe"],
  ["Sparrow", "Kingfisher", "Peacock", "Ostrich"],
  ["Rose", "Jasmine", "Lily", "Lotus"],
];

const answer = ["Delhi", "Tiger", "Peacock", "Lotus"];

const scoreBox = document.getElementById("score-box");
const playAgainBtn = scoreBox.querySelector(".play-again-btn");

const questionBox = document.querySelector("#question-box");
const question = document.querySelector("#question");
let option = document.querySelectorAll(".option");
const nextBtn = document.querySelector("#next-btn");

let currIndex = 0;
let score = 0;

const showQuiz = () => {
  question.innerHTML = questions[currIndex];

  option.forEach((element, index) => {
    element.innerHTML = options[currIndex][index];
    element.style.backgroundColor = "white";
  });

  nextBtn.style.display = "none";
};

const checkAnswer = () => {
  nextBtn.style.display = "block";

  option.forEach((choose) => {
    choose.style.backgroundColor = "white";
    choose.style.color = "#000";
  });

  if (answer.includes(event.target.innerHTML)) {
    event.target.style.backgroundColor = "lightgreen";
    score += 1;
  } else if (!answer.includes(event.target.innerHTML)) {
    event.target.style.backgroundColor = "lightcoral";

    option.forEach((element, index) => {
      if (index == currIndex) {
        element.style.backgroundColor = "lightgreen";
      }
    });
  }
};

const changeQuestion = () => {
  nextBtn.style.display = "none";
  currIndex++;

  if (currIndex <= 3) {
    showQuiz();
  } else {
    questionBox.style.transform = "translateX(-108%)";
    scoreBox.style.transform = "translateX(-108%)";

    const scored = scoreBox.querySelector("#scored");
    scored.innerHTML = `You scored ${score} out of 4.`;

    currIndex = 0;
    score = 0;
  }
};

const playAgainQuiz = () => {
  questionBox.style.transform = "translateX(0)";
  scoreBox.style.transform = "translateX(0)";

  showQuiz();
};

showQuiz();

option.forEach((choice, index) =>
  choice.addEventListener("click", checkAnswer)
);

nextBtn.addEventListener("click", changeQuestion);

playAgainBtn.addEventListener("click", playAgainQuiz);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    changeQuestion();
  } else if (event.key === "ArrowLeft") {
    playAgainQuiz();
  } else if (
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4"
  ) {
    option[event.key - 1].click();
  }
});
