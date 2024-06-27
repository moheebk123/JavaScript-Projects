const names = ["AUSTRALIA", "FINLAND", "ICELAND", "IRELAND", "NETHERLANDS"];

const images = [
  "./assets/australia.jpg",
  "./assets/finland.jpg",
  "./assets/iceland.jpg",
  "./assets/ireland.jpg",
  "./assets/netherlands.jpg",
];

let counter = 0;

const container = document.getElementById("container");
const heading = document.getElementById("heading");
const sliders = document.getElementById("sliders");
const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");
let imageslider = document.querySelectorAll(".imageslider");
const details = document.querySelectorAll(".details");

const changeSlide = () => {
  let imageslider = document.querySelectorAll(".imageslider");
  const slide = document.createElement("div");
  slide.classList.add("imageslider");
  sliders.appendChild(slide);

  details.forEach((detail) => detail.classList.add("show"));

  slide.classList.add("add");
  imageslider[0].classList.add("remove");

  setTimeout(() => {
    details.forEach((detail) => detail.classList.remove("show"));

    slide.classList.remove("add");
    imageslider[0].remove();
  }, 990);

  container.style.backgroundImage = `url(${images[counter]})`;
  heading.innerText = `${names[counter]}`;

  if (counter == 0 || counter == 1) {
    slide.setAttribute(
      "style",
      `background-image: url(${images[counter + 3]})`
    );
  } else {
    slide.setAttribute(
      "style",
      `background-image: url(${images[counter - 2]})`
    );
  }

  counter++;
  if (counter > 4) {
    counter = 0;
  }
};

autoChange = setInterval(changeSlide, 10000);

rightButton.addEventListener("click", () => {
  clearInterval(autoChange);
  changeSlide();
  setTimeout(() => {
    autoChange = setInterval(changeSlide, 10000);
  }, 5000);
});

leftButton.addEventListener("click", () => {
  clearInterval(autoChange);

  let imageslider = document.querySelectorAll(".imageslider");

  const slide = document.createElement("div");
  slide.classList.add("imageslider");
  slide.setAttribute("style", `background-image: url(${images[counter - 1]})`);
  sliders.insertAdjacentElement("afterbegin", slide);

  details.forEach((detail) => detail.classList.add("show"));

  slide.classList.add("add");
  imageslider[imageslider.length - 1].classList.add("remove");

  setTimeout(() => {
    details.forEach((detail) => detail.classList.remove("show"));

    slide.classList.remove("add");
    imageslider[imageslider.length - 1].remove();
  }, 990);

  container.style.backgroundImage = `url(${images[counter - 2]})`;
  heading.innerText = `${names[counter - 2]}`;

  if (counter == 0 || counter == 1) {
    if (counter == 0) {
      slide.setAttribute(
        "style",
        `background-image: url(${images[counter + 4]})`
      );
    } else {
      slide.setAttribute(
        "style",
        `background-image: url(${images[counter - 1]})`
      );
    }

    container.style.backgroundImage = `url(${images[counter + 3]})`;
    heading.innerText = `${names[counter + 3]}`;
  }

  counter--;
  if (counter < 0) {
    counter = 4;
  }

  setTimeout(() => {
    autoChange = setInterval(changeSlide, 10000);
  }, 5000);
});
