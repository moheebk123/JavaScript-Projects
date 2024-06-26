const game = document.getElementById("game");
const button = document.querySelector("button");

const choices = [
  "😊",
  "😂",
  "😍",
  "😎",
  "😵‍💫",
  "😡",
  "🥶",
  "🤢",
  "😊",
  "😂",
  "😍",
  "😎",
  "😵‍💫",
  "😡",
  "🥶",
  "🤢",
];

let shuffledChoices;

const fillChoices = () => {
  button.innerHTML = "Play Again";
  shuffledChoices = choices.sort(() => (Math.random() > 0.5 ? 2 : -1));

  game.innerHTML = "";

  for (let i = 0; i < choices.length; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerText = shuffledChoices[i];
    game.appendChild(box);
    box.addEventListener("click", () => {
      box.classList.add("openBox");
      if (
        document.querySelectorAll(".openBox").length > 0 &&
        document.querySelectorAll(".openBox").length > 1
      ) {
        setTimeout(() => {
          if (
            document.querySelectorAll(".openBox")[0].innerText ==
            document.querySelectorAll(".openBox")[1].innerText
          ) {
            document.querySelectorAll(".openBox")[1].classList.add("matchBox");
            document.querySelectorAll(".openBox")[0].classList.add("matchBox");
            document
              .querySelectorAll(".openBox")[1]
              .classList.remove("openBox");
            document
              .querySelectorAll(".openBox")[0]
              .classList.remove("openBox");

            if (
              document.querySelectorAll(".matchBox").length == choices.length
            ) {
              alert("WIN");
            }
          } else {
            document
              .querySelectorAll(".openBox")[1]
              .classList.remove("openBox");
            document
              .querySelectorAll(".openBox")[0]
              .classList.remove("openBox");
          }
        }, 500);
      }
    });
  }
};
