const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("div#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

let size = 30;

function createBoxes() {
  boxesContainer.innerHTML = "";
  const amount = document.querySelector("input").value;
  if (amount > 1 && amount < 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("js-boxes");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      size += 10;
      boxesContainer.append(box);
    }
    document.querySelector("input").value = "";
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
