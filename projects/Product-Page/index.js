// Images URL
const silverImagesURL = [
  "./assets/silver-macbook-front.webp",
  "./assets/silver-macbook-side.webp",
  "./assets/silver-macbook-upper.webp",
];
const goldImagesURL = [
  "./assets/gold-macbook-front.webp",
  "./assets/gold-macbook-side.webp",
  "./assets/gold-macbook-upper.webp",
];
const midnightImagesURL = [
  "./assets/midnight-macbook-front.webp",
  "./assets/midnight-macbook-side.webp",
  "./assets/midnight-macbook-upper.webp",
];

const img = document.querySelector("img");
const imageList = document.querySelectorAll(".image-list");
const colors = document.querySelectorAll(".color");
const size = document.querySelectorAll(".size");
const quantity = document.getElementById("quantity");
const cartItem = document.getElementById("cart-item");
const color = document.getElementById("color");
const price = document.getElementById("price");

// Price According to Quantity & Size & Color
const updatePrice = () => {
  if (quantity.value === "") {
    if (size[0].classList.contains("active")) {
      price.innerText = 900;
    } else if (size[1].classList.contains("active")) {
      price.innerText = 950;
    } else if (size[2].classList.contains("active")) {
      price.innerText = 1000;
    }
  } else {
    if (size[0].classList.contains("active")) {
      price.innerText = 900 * Number(quantity.value);
    } else if (size[1].classList.contains("active")) {
      price.innerText = 950 * Number(quantity.value);
    } else if (size[2].classList.contains("active")) {
      price.innerText = 1000 * Number(quantity.value);
    }
  }
};

// Changes the Images of Product
imageList.forEach((list, index) => {
  // Change Images of Product
  list.addEventListener("click", () => {
    if (list.classList.contains("silver")) {
      if (index === 0) {
        img.src = silverImagesURL[0];
      } else if (index === 1) {
        img.src = silverImagesURL[1];
      } else if (index === 2) {
        img.src = silverImagesURL[2];
      }
    } else if (list.classList.contains("gold")) {
      if (index === 0) {
        img.src = goldImagesURL[0];
      } else if (index === 1) {
        img.src = goldImagesURL[1];
      } else {
        img.src = goldImagesURL[2];
      }
    } else if (list.classList.contains("midnight")) {
      if (index === 0) {
        img.src = midnightImagesURL[0];
      } else if (index === 1) {
        img.src = midnightImagesURL[1];
      } else if (index === 2) {
        img.src = midnightImagesURL[2];
      }
    }

    imageList.forEach((listItem) => listItem.classList.remove("active"));
    list.classList.add("active");
  });
});

// Change Product Color
const changeColor = () => {
  imageList.forEach((listItem) => {
    if (event.target.classList.contains("silver")) {
      img.src = silverImagesURL[0];

      colors.forEach((color) => color.classList.remove("active"));
      event.target.classList.add("active");

      imageList.forEach((listItem) => {
        listItem.classList.remove("gold");
        listItem.classList.remove("midnight");
        listItem.classList.remove("active");
        listItem.classList.add("silver");
      });

      imageList[0].classList.add("active");
    } else if (event.target.classList.contains("gold")) {
      img.src = goldImagesURL[0];

      colors.forEach((color) => color.classList.remove("active"));
      event.target.classList.add("active");

      imageList.forEach((listItem) => {
        listItem.classList.remove("silver");
        listItem.classList.remove("midnight");
        listItem.classList.remove("active");
        listItem.classList.add("gold");
      });

      imageList[0].classList.add("active");
    } else if (event.target.classList.contains("midnight")) {
      img.src = midnightImagesURL[0];

      colors.forEach((color) => color.classList.remove("active"));
      event.target.classList.add("active");

      imageList.forEach((listItem) => {
        listItem.classList.remove("silver");
        listItem.classList.remove("gold");
        listItem.classList.remove("active");
        listItem.classList.add("midnight");
      });

      imageList[0].classList.add("active");
    }
  });
};
color.addEventListener("click", changeColor);

// Add items in Cart
const addItem = () => {
  if (quantity.value === "") {
    cartItem.innerText = Number(cartItem.innerText) + 1;
  } else {
    cartItem.innerText = Number(cartItem.innerText) + Number(quantity.value);
  }
};

// Change Size
size.forEach((sizes) => {
  sizes.addEventListener("click", () => {
    size.forEach((sizes) => sizes.classList.remove("active"));
    sizes.classList.add("active");
    updatePrice();
  });
});
