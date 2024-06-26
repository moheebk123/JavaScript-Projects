const inputImageTerm = document.getElementById("search-image");
const searchButton = document.getElementById("search-button");
const searchMoreButton = document.getElementById("search-more-button");
const imageContainer = document.getElementById("image-container");
let page;
const apiKey = "-M5Pr-PhWCxTsv4dS99RIaq9ZEejj2Ox3Zwh2b58klo";

const fetchImages = () => {
  searchMoreButton.style.opacity = 1;
  let api = `https://api.unsplash.com/search/photos?client_id=-M5Pr-PhWCxTsv4dS99RIaq9ZEejj2Ox3Zwh2b58klo&page=${page}&per_page=9&query=${inputImageTerm.value}`;
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const results = data.results;

      results.forEach((search) => {
        const image = document.createElement("img");
        image.setAttribute("src", search.urls.full);
        imageContainer.appendChild(image);
      });
    });
};

searchButton.addEventListener("click", () => {
  event.preventDefault();
  page = 1;
  imageContainer.innerHTML = null;
  fetchImages();
});

searchMoreButton.addEventListener("click", () => {
  event.preventDefault();
  page++;
  fetchImages();
});
