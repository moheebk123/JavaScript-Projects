const cursor = document.getElementById("cursor");
const imgBox = document.getElementById("img-box");
const menu = document.getElementById("menu");
const icon = menu.querySelector("i");
const img = document.querySelector("img");

function website() {
  img.src = "./assets/web-development.jpg";
  cursor.style.transform = "scale(0.5)";
}
function mobile() {
  img.src = "./assets/app-development.avif";
  cursor.style.transform = "scale(0.5)";
}
function ai() {
  img.src = "./assets/artificial-intelligence.jpg";
  cursor.style.transform = "scale(0.5)";
}
function blockchain() {
  img.src = "./assets/blockchain-technology.jpg";
  cursor.style.transform = "scale(0.5)";
}

const showMenu = () => {
  if (icon.classList.contains("fa-bars")) {
    menu.style.transform = "rotate(-180deg)";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
    imgBox.classList.add("small");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
    menu.style.transform = "rotate(0)";
    imgBox.classList.remove("small");
  }
};

const showImage = () => {
  if (imgBox.classList.contains("small")) {
    menu.style.transform = "rotate(0)";
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
    imgBox.classList.remove("small");
  }
};

menu.addEventListener("mouseenter", showMenu);

imgBox.addEventListener("mouseenter", showImage);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX - 20 + "px";
  cursor.style.top = e.pageY - 20 + "px";
  cursor.style.display = "block";
});
