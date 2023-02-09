const categoryEl = document.querySelector("ul#categories");
console.log(`Number of categories: ${categoryEl.children.length}`);

const itemEl = document.querySelectorAll(".item");

itemEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
