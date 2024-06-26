const nextBtn = document.querySelector("#next-page");
const prevBtn = document.querySelector("#previous-page");
const page = document.querySelectorAll(".page");

page.forEach((element) => {
  element.addEventListener("click", () => {
    page.forEach((element) => element.classList.remove("active"));
    element.classList.add("active");
  });
});

nextBtn.addEventListener("click", () => {
  for (let index = 0; index < page.length; index++) {
    const element = page[index];

    if (element.classList.contains("active")) {
      if (index < page.length - 1) {
        page[index + 1].classList.add("active");
        element.classList.remove("active");
      }

      break;
    }
  }
});

prevBtn.addEventListener("click", () => {
  for (let index = 0; index < page.length; index++) {
    const element = page[index];

    if (element.classList.contains("active")) {
      if (index >= 0) {
        page[index - 1].classList.add("active");
        element.classList.remove("active");
      }

      break;
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    page[event.key - 1].click();
  } else if (event.key === "2") {
    page[event.key - 1].click();
  } else if (event.key === "3") {
    page[event.key - 1].click();
  } else if (event.key === "4") {
    page[event.key - 1].click();
  } else if (event.key === "5") {
    page[event.key - 1].click();
  } else if (event.key === "6") {
    page[event.key - 1].click();
  }
});
