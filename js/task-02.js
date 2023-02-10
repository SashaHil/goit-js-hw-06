const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const allIngredients = [];

ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  allIngredients.push(itemEl);
});

ingredientsEl.append(...allIngredients);

console.log(ingredientsEl);
