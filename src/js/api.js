import {
  updateDisplay,
  showErrorWrongCity,
  removeErrorWrongCity,
} from "./utils.js";
import { setFirstLetter } from "./main.js";
const apiKey = "f6a64fa2b7d7aa2d8f5f56e49d54a4a3";
const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?";
const weatherIconUrl = "http://openweathermap.org/img/wn/";
const weatherIcon = document.getElementById("weather__icon");

const fetchWeatherJSON = async (city) => {
  const response = await fetch(
    `${weatherUrl}q=${city}&appid=${apiKey}&units=metric`
  );
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    showErrorWrongCity();
    throw new Error(message);
  }
  const weatherData = await response.json();
  removeErrorWrongCity();
  setFirstLetter();
  return weatherData;
};

const fetchWeatherIcon = async (icon) => {
  const response = await fetch(`${weatherIconUrl}${icon}@2x.png`);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const blobElement = await response.blob();
  const weatherIcon = URL.createObjectURL(blobElement);
  return weatherIcon;
};

const setWeatherIcon = async (code) => {
  fetchWeatherIcon(code).then((iconSrc) => {
    weatherIcon.src = iconSrc;
  });
};

const setWeaterData = async (city) => {
  fetchWeatherJSON(city).then((weatherData) => {
    updateDisplay(weatherData);
  });
};

export { setWeatherIcon, setWeaterData };
