const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");
textInput.addEventListener("input", setInput);
function setInput(event) {
  if (event.target.value.trim() !== "") {
    output.textContent = event.target.value.trim();
  }
}
