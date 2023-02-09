const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const text = document.querySelector("#value");

let counterValue = 0;

const decrementEvent = () => {
  counterValue -= 1;
  text.textContent = counterValue;
};

const incrementEvent = () => {
  counterValue += 1;
  text.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementEvent);
incrementBtn.addEventListener("click", incrementEvent);
