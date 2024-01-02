const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("div#boxes");
const input = document.querySelector("input");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);


function createBoxes() {
  boxesContainer.innerHTML = "";
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    let currentSize = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("js-boxes");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${currentSize}px`;
      box.style.height = `${currentSize}px`;
      currentSize += 10;
      boxesContainer.append(box);
    }
    input.value = "";
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
