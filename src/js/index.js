import "../scss/main.scss";
import moment from "moment";

/* place your code below */

const btnHamburger = document.querySelector(".hamburger--js");

btnHamburger.addEventListener("click", () => {
  document.querySelector(".menu--js").classList.toggle("menu--open");
});

const days = moment().daysInMonth();
console.log(days);

const darkmodeButton = document.getElementById("dark-mode-button");

let isDark = false;

function changeMode() {
  isDark = !isDark;
  document.querySelector(".main").classList.toggle("darkmode");
  switch (isDark) {
    case true:
      darkmodeButton.textContent = "Powrót do trybu jasnego";
      break;
    case false:
      darkmodeButton.textContent = "Zmień tryb na ciemny";
      break;
    default:
      break;
  }
}
darkmodeButton.addEventListener("click", changeMode);
