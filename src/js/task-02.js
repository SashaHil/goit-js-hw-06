const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// 1 Спосіб

const list = document.querySelector("#ingredients");

const firstItem = document.createElement("li");
firstItem.textContent = "Potatoes";
firstItem.classList.add("item");

const secondItem = document.createElement("li");
secondItem.textContent = "Mushrooms";
secondItem.classList.add("item");

const thirdItem = document.createElement("li");
thirdItem.textContent = "Garlic";
thirdItem.classList.add("item");

const fourItem = document.createElement("li");
fourItem.textContent = "Tomatos";
fourItem.classList.add("item");

const fiveItem = document.createElement("li");
fiveItem.textContent = "Herbs";
fiveItem.classList.add("item");

const sixItem = document.createElement("li");
sixItem.textContent = "Condiments";
sixItem.classList.add("item");

list.append(firstItem, secondItem, thirdItem, fourItem, fiveItem, sixItem);

console.log(list);

// 2 Спосіб

// const list = document.querySelector("#ingredients");

// const allList = [];

// ingredients.forEach((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");
//   allList.push(itemEl);
// });

// list.append(...allList);

// console.log(list);
