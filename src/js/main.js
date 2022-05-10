import { setWeatherIcon, setWeaterData } from "./api.js";
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (e) => {
  setWeaterData(e.target.value);
});

const setFirstLetter = () => {
  let string = searchInput.value;
  let upperCase = string.charAt(0).toUpperCase() + string.slice(1);
  searchInput.value = upperCase;
};

export { setFirstLetter };

setWeaterData("Canary Islands");
