let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", decrementValue);

incrementBtn.addEventListener("click", incrementValue);

function decrementValue() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function incrementValue() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
