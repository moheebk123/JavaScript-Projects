const productBox = document.getElementById("product-box");
const productBoxImage = productBox.querySelector("img");
const pagesBox = document.getElementById("pagination-box");
const categoryListBox = document.querySelector("#category-list");
const brand = document.querySelector("#brand");
const brandBox = document.querySelector("#brand-box");
const rating = document.querySelector("#rating");
const ratingBox = document.querySelector("#rating-box");
let categories;
let pages;
let pagesLength;
let screenWidth;

const categoryHTML = () => {
  return `
    <li class="category-item">All</li>
    <li class="category-item">Smartphones</li>
    <li class="category-item">Laptop</li>
    <li class="category-item">Electronics</li>
    <li class="category-item">Books</li>
    <li class="category-item">Fashion</li>
    <li class="category-item">Home-Decoration</li>
    `;
};

const mobileBrandHTML = () => {
  brand.style.display = "block";
  brandBox.innerHTML = `
    <div>
        <input type="checkbox" value="Samsung">
        <label>Samsung</label>
    </div>

    <div>
        <input type="checkbox" value="Apple">
        <label>Apple</label>
    </div>

    <div>
        <input type="checkbox" value="OPPO">
        <label>OPPO</label>
    </div>

    <div>
        <input type="checkbox" value="IQOO">
        <label>IQOO</label>
    </div>

    <div>
        <input type="checkbox" value="Nothing">
        <label>Nothing</label>
    </div>

    <div>
        <input type="checkbox" value="Infinix">
        <label>Infinix</label>
    </div>

    <div>
        <input type="checkbox" value="VIVO">
        <label>VIVO</label>
    </div>

    <div>
        <input type="checkbox" value="POCO">
        <label>POCO</label>
    </div>

    <div>
        <input type="checkbox" value="Realme">
        <label>Realme</label>
    </div>

    <div>
        <input type="checkbox" value="Motorola">
        <label>Motorola</label>
    </div>
    `;
};

const laptopBrandHTML = () => {
  brand.style.display = "block";
  brandBox.innerHTML = `
    <div>
        <input type="checkbox" value="Apple">
        <label>Apple</label>
    </div>

    <div>
        <input type="checkbox" value="HP">
        <label>HP</label>
    </div>

    <div>
        <input type="checkbox" value="Lenovo">
        <label>Lenovo</label>
    </div>

    <div>
        <input type="checkbox" value="ASUS">
        <label>ASUS</label>
    </div>

    <div>
        <input type="checkbox" value="ACER">
        <label>ACER</label>
    </div>
    `;
};

const ratingHTML = () => {
  return `
    <div>
    <input type="checkbox" value="5" class="ratings">
        <img class="star5" src="./asset/5 star.jpg" alt="5 star">
    </div>

    <div>
    <input type="checkbox" value="4" class="ratings">
    <img class="star4" src="./asset/4 star.jpg" alt="4 star">
    </div>
    `;
};

const productHTML = (productData) => {
  let ratingImageLink;
  if (productData.rating == 5) {
    ratingImageLink = "./asset/5 star.jpg";
  } else {
    ratingImageLink = "./asset/4 star.jpg";
  }
  return `
    <div class="product">
        <div id="product-image-box">
            <img src="${productData.image}" class="product-image">
        </div>
        <div id="content-box">
            <div id="rating-box">
                <img src="${ratingImageLink}" id="rating-image">
            </div>
            <div id="price">₹${productData.price}</div>

            <div id="title">${productData.title}</div>
        </div>
    </div>
    `;
};

const showProductbyCategory = async (productCategory) => {
  const data = await getProduct();

  const ratings = ratingBox.querySelectorAll("input");
  ratings.forEach((rating) => (rating.checked = false));

  const brands = brandBox.querySelectorAll("input");
  brands.forEach((brand) => (brand.checked = false));

  const filterProductByCategory = data.filter((product) =>
    product.category.includes(productCategory)
  );

  productBox.style.backgroundImage = "";
  if (filterProductByCategory.length == 0) {
    productBox.style.backgroundImage = "url(./asset/not-found.png)";
  }
  fillProduct(filterProductByCategory);

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      ratings.forEach((rating) => (rating.checked = false));
      rating.checked = true;
      const currentRating = Number(rating.value);
      const filterProductByCategoryRating = filterProductByCategory.filter(
        (rate) => rate.rating == currentRating
      );

      productBox.style.backgroundImage = "";
      if (filterProductByCategoryRating.length == 0) {
        productBox.style.backgroundImage = "url(./asset/not-found.png)";
      }
      fillProduct(filterProductByCategoryRating);

      brands.forEach((brand) => {
        brand.addEventListener("click", () => {
          brands.forEach((brand) => (brand.checked = false));
          brand.checked = true;
          const currentBrand = brand.value;
          const filterProductByCategoryRatingBrand =
            filterProductByCategoryRating.filter((brandName) =>
              brandName.brand.includes(currentBrand)
            );

          productBox.style.backgroundImage = "";
          if (filterProductByCategoryRatingBrand.length == 0) {
            productBox.style.backgroundImage = "url(./asset/not-found.png)";
          }
          fillProduct(filterProductByCategoryRatingBrand);
        });
      });
    });
  });

  brands.forEach((brand) => {
    brand.addEventListener("click", () => {
      brands.forEach((brand) => (brand.checked = false));
      brand.checked = true;
      const currentBrand = brand.value;
      const filterProductByCategoryBrand = filterProductByCategory.filter(
        (brandName) => brandName.brand.includes(currentBrand)
      );

      productBox.style.backgroundImage = "";
      if (filterProductByCategoryBrand.length == 0) {
        productBox.style.backgroundImage = "url(./asset/not-found.png)";
      }
      fillProduct(filterProductByCategoryBrand);

      ratings.forEach((rating) => {
        rating.addEventListener("click", () => {
          ratings.forEach((rating) => (rating.checked = false));
          rating.checked = true;
          const currentRating = Number(rating.value);
          const filterProductByCategoryBrandRating =
            filterProductByCategoryBrand.filter(
              (rate) => rate.rating == currentRating
            );

          productBox.style.backgroundImage = "";
          if (filterProductByCategoryBrandRating.length == 0) {
            productBox.style.backgroundImage = "url(./asset/not-found.png)";
          }
          fillProduct(filterProductByCategoryBrandRating);
        });
      });
    });
  });
};

const getProduct = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    const response = await fetch("./index.json", setHeader);
    const data = await response.json();

    return data;
  } catch (err) {
    productBox.style.backgroundImage = "url(./asset/not-found.png)";
    console.error(`The error is ${err}`);
  }
};

const fillProduct = (productList) => {
  productBox.innerHTML = "";
  productList.forEach((productData, index) => {
    const product = productHTML(productData);
    productBox.insertAdjacentHTML("beforeend", product);
  });
};

const showData = async () => {
  const rating = ratingHTML();
  ratingBox.innerHTML = rating;

  const category = categoryHTML();
  categoryListBox.innerHTML = category;
  categories = document.querySelectorAll(".category-item");

  const data = await getProduct();

  fillProduct(data);

  screenWidth = window.innerWidth;
};

categoryListBox.addEventListener("click", () => {
  if (event.target.innerHTML === "Smartphones") {
    mobileBrandHTML();
  } else if (event.target.innerHTML === "Laptop") {
    laptopBrandHTML();
  } else {
    brand.style.display = "none";
  }

  if (
    event.target.innerHTML === "Smartphones" ||
    event.target.innerHTML === "Laptop" ||
    event.target.innerHTML === "Electronics" ||
    event.target.innerHTML === "Books" ||
    event.target.innerHTML === "Fashion" ||
    event.target.innerHTML === "Home-Decoration" ||
    event.target.innerHTML === "All"
  ) {
    rating.style.display = "block";
    let productCategory = event.target.innerHTML;
    if (productCategory === "All") {
      productCategory = "";
    }
    showProductbyCategory(productCategory);
  }
});

window.addEventListener("load", showData);
