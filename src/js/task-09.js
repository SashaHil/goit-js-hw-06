const changeColor = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const body = document.querySelector("body");

const onColorChange = () => {
  body.style.backgroundColor = getRandomHexColor();

  colorValue.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", onColorChange);
