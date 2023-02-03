const inputValue = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");

const onSizeControl = () => {
  textValue.style.fontSize = `${inputValue.value}px`;
};

inputValue.addEventListener("input", onSizeControl);
