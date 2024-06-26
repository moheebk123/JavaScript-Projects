const searchInput = document.querySelector("input");
const countryList = document.getElementById("country-list");
const countryDetails = document.getElementById("country-details");
let countries;
let searchCountry = "";

const fillCountryDetails = (searchCountry) => {
  fetch("./index.json")
    .then((response) => response.json())

    .then((data) => {
      countryDetails.innerHTML = "";
      const [filterCountry] = data.filter((item) =>
        item.countryData.country.toLocaleLowerCase().includes(searchCountry)
      );
      const countryDetail = `<div class="image">
        <img width="200px" src="${filterCountry.countryData.flag}" alt="${filterCountry.countryData.country}"/>
        </div>
        <h1>${filterCountry.countryData.country}</h1>
        <p class="capital">capital : ${filterCountry.countryData.state}</p><hr>
        <div class="info">
          <div class="text">
            <h3>${filterCountry.countryData.language}</h3>
            <p>Native Language</p>
          </div>
          <div class="text">
            <h3>${filterCountry.countryData.currency}</h3>
            <p>Currency</p>
          </div>
        </div>`;
      countryDetails.innerHTML = countryDetail;
      countryDetails.style.opacity = "1";
      countryList.style.opacity = "0";
    })
    .catch((error) => console.error("Error fetching data:", error));
};

const fetchCountries = (searchCountry) => {
  fetch("./index.json")
    .then((response) => response.json())

    .then((data) => {
      countryList.innerHTML = "";
      const filterCountry = data.filter((item) =>
        item.name.includes(searchCountry)
      );

      filterCountry.forEach((item) => {
        const country = document.createElement("div");
        country.classList.add("country");
        countries = document.querySelectorAll(".country");
        country.innerText = `${item.countryData.country}`;
        countryList.appendChild(country);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};

searchInput.addEventListener("input", () => {
  countryList.style.opacity = "1";
  searchCountry = searchInput.value;
  fetchCountries(searchCountry.toLocaleLowerCase());
});

countryList.addEventListener("click", () => {
  // fillCountryDetails();
  const country = event.target.innerHTML.toLocaleLowerCase();
  fillCountryDetails(country);
});
