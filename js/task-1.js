const categories = document.querySelector("#categories");
const item = categories.querySelectorAll(".item");
console.log(`Number of categories: ${categories.children.length}`);
const result = item.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
