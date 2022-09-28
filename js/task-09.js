const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const nameColorEl = document.querySelector(".color");

function changeBgColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  nameColorEl.textContent = randomColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonEl.addEventListener("click", changeBgColor);
