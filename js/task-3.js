const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");
textInput.addEventListener("input", setInput);
function setInput() {
  const value = textInput.value.trim();
  value? output.textContent = value: output.textContent = "Anonymous";
}
