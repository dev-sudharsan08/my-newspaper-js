function fetchWeather() {
  let weather = localStorage.getItem("weatherDetails");
  console.log(weather)

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${weather}&units=metric&appid=0d0a354784e8166b7b9fee6a3a29bcc2`
  )
    .then((res) => {
      console.log("Successfully fetched the response");
      return res.json();
    })
    .then((resInJson) => {
      console.log(resInJson);
      renderWeatherTemplate(resInJson);
    })
    .catch((err) => {
      console.log("Inside catch");
      console.log(err);
    })
    .finally(() => {
      console.log("It is over");
    });
}
fetchWeather();

function renderWeatherTemplate(weatherInfo) {
  console.log(weatherInfo)

  let weatherImage = ``;
  switch (weatherInfo.weather[0].main) {
    case 'Clouds':
      weatherImage = `url("/assets/images/cloudy-image.jpg") no-repeat`;
      break;
    case 'Rain':
      weatherImage = `url("/assets/images/rain-image.jpg") no-repeat`;

      break;
    case 'Haze':
      weatherImage = `url("/assets/images/haze-image.png") no-repeat`;

      break;
    case 'Drizzle':
      weatherImage = `url("/assets/images/drizzle-image.png") no-repeat`;

      break;
    case 'Clear':
      weatherImage = `url("./assets/images/sunny-image.jpg") no-repeat`;
      break;
    default:
      weatherImage = "";
  }

  document.getElementById('inputField').value = weatherInfo.name;
  document.getElementById('cityName').innerText = weatherInfo.name;
  document.getElementById('temperature').innerText = `${weatherInfo.main.temp}°C`;
  document.getElementById('feelsLike').innerText = `Feels Like: ${weatherInfo.main.feels_like}°C`;
  document.querySelector('body').style.background = weatherImage;
  document.querySelector('body').style.backgroundSize = "1370px 562px";
  document.getElementById('weatherInfo').innerText = weatherInfo.weather[0].main;
  document.getElementById('minTemperature').innerText = `Min Temp: ${weatherInfo.main.temp_min}°C`;
  document.getElementById('maxTemperature').innerText = `Max Temp: ${weatherInfo.main.temp_max}°C`;
  document.getElementById('humidity').innerText = `Humidity: ${weatherInfo.main.humidity}%`;
  document.getElementById('windSpeed').innerText = `Wind Speed: ${weatherInfo.wind.speed} km/hr`;
  document.getElementById('pressure').innerText = `Pressure: ${weatherInfo.main.pressure} psi`;
  document.getElementById('latitude').innerText = `Latitude: ${weatherInfo.coord.lat}`;
  document.getElementById('longitude').innerText = `Longitude: ${weatherInfo.coord.lon}`;
}

let weatherInfoBtn = document.querySelector("#weatherInfoBtn");
weatherInfoBtn.addEventListener("click", () => {
  let cityName = document.querySelector("#inputField").value;
  console.log(cityName);
  localStorage.setItem("weatherDetails", cityName);
  fetchWeather();
});


