const body = document.querySelector("body");
const colorChange = document.querySelector("button.change-color");
const color = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorEvent = () => {
  let colorRandom = getRandomHexColor();

  body.style.backgroundColor = colorRandom;
  color.textContent = colorRandom;
};

colorChange.addEventListener("click", colorEvent);
