const body = document.querySelector("body");
const button = body.querySelector("button.change-color");
const colorSpan = body.querySelector(".color");
button.addEventListener("click", setColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function setColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}
