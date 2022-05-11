import { setWeatherIcon } from "./api.js";

const searchInput = document.getElementById("search-input");
const weatherTemperature = document.getElementById("weather__temperature");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");
const weatherDescription = document.getElementById("weather-description");
const humidityValue = document.getElementById("humidity-value");
const windValue = document.getElementById("wind-value");
const visibilityValue = document.getElementById("visibility-value");
const body = document.getElementById("body__container");

const errorMessage = document.getElementById("error-message");

const updateDisplay = (weatherData) => {
  console.log(weatherData);
  getTime();
  setWeatherIcon(weatherData.weather[0].icon);
  weatherTemperature.textContent = `${Math.floor(
    parseFloat(weatherData.main.temp)
  )}°C`;
  maxTemp.textContent = `${Math.floor(
    parseFloat(weatherData.main.temp_max)
  )}°C`;
  minTemp.textContent = `${Math.floor(
    parseFloat(weatherData.main.temp_min)
  )}°C`;
  weatherDescription.textContent =
    weatherData.weather[0].description.toUpperCase();
  humidityValue.textContent = `${weatherData.main.humidity}%`;
  windValue.textContent = `${weatherData.wind.speed}km/h`;
  visibilityValue.textContent = `${weatherData.visibility}m`;
};

const showErrorWrongCity = () => {
  errorMessage.classList.remove("hide");
};
const removeErrorWrongCity = () => {
  errorMessage.classList.add("hide");
};

const getTime = () => {
  const hours = new Date().getHours();
  if (hours > 20) {
    body.classList.remove("sunny");
    body.classList.add("night");
    weatherTemperature.classList.toggle("night_time");
    minTemp.classList.toggle("night_time");
    maxTemp.classList.toggle("night_time");
    weatherDescription.classList.toggle("night_time");
    humidityValue.classList.toggle("night_time");
    visibilityValue.classList.toggle("night_time");
    windValue.classList.toggle("night_time");
    searchInput.classList.toggle("night_time");
  }
};

export { updateDisplay, showErrorWrongCity, removeErrorWrongCity };
