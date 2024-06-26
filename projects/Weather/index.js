const loader = document.getElementById("preloader");
const inputCity = document.getElementById("input-city");
const search = document.getElementById("search");
const weatherIcon = document.querySelector("img");
const degree = document.getElementById("degree");
const city = document.getElementById("city");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const apiKey = "09afd4ca0275624aa322a24eefcd9082";

const showWeather = () => {
  weatherIcon.style.opacity = "1";
  city.style.opacity = "1";

  let api = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${inputCity.value}`;

  fetch(api)
    .then((response) => response.json())

    .then((data) => {
      data.weather.forEach((element) => {
        if (element.main == "Clear") {
          weatherIcon.src = "./assets/clear.svg";
        } else if (
          element.main == "Cloud" ||
          element.main == "Clouds" ||
          element.main == "Mist"
        ) {
          weatherIcon.src = "./assets/mist.svg";
        } else if (element.main == "Haze") {
          weatherIcon.src = "./assets/haze.svg";
        } else if (element.main == "Smoke") {
          weatherIcon.src = "./assets/smoke.svg";
        } else if (element.main == "Snow") {
          weatherIcon.src = "./assets/snow.svg";
        } else if (element.main == "Rain") {
          weatherIcon.src = "./assets/rain.svg";
        }
      });

      degree.innerText = data.main.temp;
      city.innerText = data.name;
      wind.innerText = data.wind.speed;
      humidity.innerText = data.main.humidity;
    });
};

search.addEventListener("click", showWeather);

document.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    showWeather();
  }
});

window.addEventListener("load", () =>
  setTimeout(() => (loader.style.display = "none"), 2000)
);
