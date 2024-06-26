const loader = document.getElementById("preloader");
const techs = [
  "java",
  "python",
  "javascript",
  "css",
  "html",
  "tailwindcss",
  "bootstrap",
  "react",
  "angular",
  "vue",
  "mongodb",
  "node",
  "express",
  "typescript",
  "next",
  "flask",
  "django",
  "spring",
  "springboot",
  "php",
  "swift",
  "kotlin",
  "flutter",
  "reactnative",
  "golang",
  "ruby",
  "rust",
];

const playBtn = document.querySelector("button");
const message = document.querySelector("p");
const userInput = document.querySelector("input");
const sentence = document.getElementById("sentence");
const word = document.getElementById("word");

let newTech;
let scrambleTech;

const selectTech = () => {
  let randomNum = Math.floor(Math.random() * techs.length);
  let randomTech = techs[randomNum];
  return randomTech;
};

const scrambleWord = (wordArray) => {
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = wordArray[i];
    wordArray[i] = wordArray[j];
    wordArray[j] = temp;
  }
  return wordArray;
};

const game = () => {
  if (playBtn.innerText === "Click Here To Start") {
    playBtn.innerText = "Guess";
    sentence.innerText = "Guess : ";
    userInput.style.opacity = "1";
    newTech = selectTech();
    scrambleTech = scrambleWord(newTech.split("")).join("");
    word.innerText = scrambleTech;
  } else if (playBtn.innerText === "Guess") {
    if (userInput.value == newTech) {
      sentence.innerHTML = `Your guess is correct. <br/>It is ${newTech}`;
      word.innerText = "";
      playBtn.innerText = "Play Again";
    } else {
      sentence.innerHTML = `It's wrong. <br/>Guess again : `;
      word.innerText = scrambleTech;
    }
  } else if (playBtn.innerText === "Play Again") {
    playBtn.innerText = "Guess";
    userInput.value = "";
    sentence.innerText = "Guess : ";
    newTech = selectTech();
    scrambleTech = scrambleWord(newTech.split("")).join("");
    word.innerText = scrambleTech;
  }
};

playBtn.addEventListener("click", game);

document.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    playBtn.click();
  }
});

window.addEventListener("load", () =>
  setTimeout(() => (loader.style.display = "none"), 2000)
);
