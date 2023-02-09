const inputValue = document.querySelector("input#font-size-control");
const textValue = document.querySelector("span#text");

const onSizeValue = (onSize) => {
  textValue.style.fontSize = `${onSize.target.value}px`;
};

inputValue.addEventListener("input", onSizeValue);
