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

const paginationHTML = (length) => {
  pagesBox.innerHTML = "";
  productBox.style.transform = "translateY(-20px)";

  for (let i = 1; i <= length; i++) {
    if (i == 1) {
      const div = `<div class="page active">${i}</div>`;
      pagesBox.insertAdjacentHTML("beforeend", div);
    } else {
      const div = `<div class="page">${i}</div>`;
      pagesBox.insertAdjacentHTML("beforeend", div);
    }
  }

  pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.addEventListener("click", () => {
      pages.forEach((page) => page.classList.remove("active"));
      page.classList.add("active");

      if (screenWidth <= 768) {
        if (page.innerText == 1) {
          productBox.style.transform = "translateY(-20px)";
        } else if (page.innerText == 2) {
          productBox.style.transform = "translateY(-500px)";
        } else if (page.innerText == 3) {
          productBox.style.transform = "translateY(-980px)";
        } else if (page.innerText == 4) {
          productBox.style.transform = "translateY(-1460px)";
        } else if (page.innerText == 5) {
          productBox.style.transform = "translateY(-1950px)";
        } else if (page.innerText == 6) {
          productBox.style.transform = "translateY(-2430px)";
        } else if (page.innerText == 7) {
          productBox.style.transform = "translateY(-2910px)";
        } else if (page.innerText == 8) {
          productBox.style.transform = "translateY(-3390px)";
        } else if (page.innerText == 9) {
          productBox.style.transform = "translateY(-3870px)";
        } else if (page.innerText == 10) {
          productBox.style.transform = "translateY(-4350px)";
        } else if (page.innerText == 11) {
          productBox.style.transform = "translateY(-4840px)";
        } else if (page.innerText == 12) {
          productBox.style.transform = "translateY(-5320px)";
        } else if (page.innerText == 13) {
          productBox.style.transform = "translateY(-5800px)";
        } else if (page.innerText == 14) {
          productBox.style.transform = "translateY(-6280px)";
        } else if (page.innerText == 15) {
          productBox.style.transform = "translateY(-6770px)";
        } else if (page.innerText == 16) {
          productBox.style.transform = "translateY(-7250px)";
        } else if (page.innerText == 17) {
          productBox.style.transform = "translateY(-7730px)";
        } else if (page.innerText == 18) {
          productBox.style.transform = "translateY(-8210px)";
        } else if (page.innerText == 19) {
          productBox.style.transform = "translateY(-8690px)";
        } else if (page.innerText == 20) {
          productBox.style.transform = "translateY(-9170px)";
        }
      } else if (screenWidth > 768 && screenWidth <= 1024) {
        if (page.innerText == 1) {
          productBox.style.transform = "translateY(-20px)";
        } else if (page.innerText == 2) {
          productBox.style.transform = "translateY(-790px)";
        } else if (page.innerText == 3) {
          productBox.style.transform = "translateY(-1560px)";
        } else if (page.innerText == 4) {
          productBox.style.transform = "translateY(-2330px)";
        } else if (page.innerText == 5) {
          productBox.style.transform = "translateY(-3110px)";
        } else if (page.innerText == 6) {
          productBox.style.transform = "translateY(-3880px)";
        } else if (page.innerText == 7) {
          productBox.style.transform = "translateY(-4650px)";
        } else if (page.innerText == 8) {
          productBox.style.transform = "translateY(-5430px)";
        } else if (page.innerText == 9) {
          productBox.style.transform = "translateY(-6200px)";
        } else if (page.innerText == 10) {
          productBox.style.transform = "translateY(-6970px)";
        }
      } else {
        if (page.innerText == 1) {
          productBox.style.transform = "translateY(-20px)";
        } else if (page.innerText == 2) {
          productBox.style.transform = "translateY(-790px)";
        } else if (page.innerText == 3) {
          productBox.style.transform = "translateY(-1570px)";
        } else if (page.innerText == 4) {
          productBox.style.transform = "translateY(-2340px)";
        } else if (page.innerText == 5) {
          productBox.style.transform = "translateY(-3120px)";
        } else if (page.innerText == 6) {
          productBox.style.transform = "translateY(-3890px)";
        } else if (page.innerText == 7) {
          productBox.style.transform = "translateY(-4660px)";
        }
      }
    });
  });
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

  if (screenWidth <= 768) {
    pagesLength = Math.ceil(filterProductByCategory.length / 2);
  } else if (screenWidth <= 1024 && screenWidth > 768) {
    pagesLength = Math.ceil(filterProductByCategory.length / 4);
  } else if (screenWidth > 1024) {
    pagesLength = Math.ceil(filterProductByCategory.length / 6);
  }
  paginationHTML(pagesLength);

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      ratings.forEach((rating) => (rating.checked = false));
      rating.checked = true;
      const currentRating = Number(rating.value);
      const filterProductByCategoryRating = filterProductByCategory.filter(
        (rate) => rate.rating == currentRating
      );

      console.log(filterProductByCategoryRating.length);

      productBox.style.backgroundImage = "";
      if (filterProductByCategoryRating.length == 0) {
        productBox.style.backgroundImage = "url(./asset/not-found.png)";
      }
      fillProduct(filterProductByCategoryRating);

      if (screenWidth <= 768) {
        pagesLength = Math.ceil(filterProductByCategoryRating.length / 2);
      } else if (screenWidth <= 1024 && screenWidth > 768) {
        pagesLength = Math.ceil(filterProductByCategoryRating.length / 4);
      } else if (screenWidth > 1024) {
        pagesLength = Math.ceil(filterProductByCategoryRating.length / 6);
      }
      paginationHTML(pagesLength);

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

          if (screenWidth <= 768) {
            pagesLength = Math.ceil(
              filterProductByCategoryRatingBrand.length / 2
            );
          } else if (screenWidth <= 1024 && screenWidth > 768) {
            pagesLength = Math.ceil(
              filterProductByCategoryRatingBrand.length / 4
            );
          } else if (screenWidth > 1024) {
            pagesLength = Math.ceil(
              filterProductByCategoryRatingBrand.length / 6
            );
          }
          paginationHTML(pagesLength);
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

      if (screenWidth <= 768) {
        pagesLength = Math.ceil(filterProductByCategoryBrand.length / 2);
      } else if (screenWidth <= 1024 && screenWidth > 768) {
        pagesLength = Math.ceil(filterProductByCategoryBrand.length / 4);
      } else if (screenWidth > 1024) {
        pagesLength = Math.ceil(filterProductByCategoryBrand.length / 6);
      }
      paginationHTML(pagesLength);

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

          if (screenWidth <= 768) {
            pagesLength = Math.ceil(
              filterProductByCategoryBrandRating.length / 2
            );
          } else if (screenWidth <= 1024 && screenWidth > 768) {
            pagesLength = Math.ceil(
              filterProductByCategoryBrandRating.length / 4
            );
          } else if (screenWidth > 1024) {
            pagesLength = Math.ceil(
              filterProductByCategoryBrandRating.length / 6
            );
          }
          paginationHTML(pagesLength);
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

  if (screenWidth <= 768) {
    pagesLength = Math.ceil(data.length / 2);
  } else if (screenWidth <= 1024 && screenWidth > 768) {
    pagesLength = Math.ceil(data.length / 4);
  } else if (screenWidth > 1024) {
    pagesLength = Math.ceil(data.length / 6);
  }
  paginationHTML(pagesLength);
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
