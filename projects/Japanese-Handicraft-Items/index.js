const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const theme = document.querySelector("body");
const english = document.querySelectorAll(".english");
const japanese = document.querySelectorAll(".japanese");
const select = document.querySelector("select");

select.addEventListener("change", (event) => {
  const language = event.target.value;
  if (language == "English") {
    japanese.forEach((element) => (element.style.display = "none"));
    english.forEach((element) => (element.style.display = "block"));
  } else if (language == "Japanese") {
    english.forEach((element) => (element.style.display = "none"));
    japanese.forEach((element) => (element.style.display = "block"));
  }
});

const themeIcon = document.getElementById("themeButton");
themeIcon.addEventListener("click", () => {
  if (themeIcon.innerHTML === `<i class="fa-solid fa-sun"></i>`) {
    themeIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    theme.classList.toggle("dark");
  } else {
    themeIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    theme.classList.toggle("dark");
  }
});
