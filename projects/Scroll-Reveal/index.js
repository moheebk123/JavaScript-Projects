const container = document.querySelector("#container");

const randomColor = () => {
  let chars = "1234567890abcdef";
  let colorLength = 6;
  let color = "#";

  for (let i = 1; i <= colorLength; i++) {
    let randomChar = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomChar, randomChar + 1);
  }
  return color;
};

for (let i = 1; i <= 30; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = randomColor();
  container.appendChild(box);
}

let boxes = document.querySelectorAll(".box");

const scrollTrigger = () => {
  boxes.forEach((box) => {
    if (box.offsetTop < window.scrollY) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", scrollTrigger);
