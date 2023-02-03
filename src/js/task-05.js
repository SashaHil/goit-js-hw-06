const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

const onEvent = (event) => {
  outputText.textContent = event.target.value;

  if (event.target.value === " ") {
    outputText.textContent = "Anonymous";
  }
};

inputText.addEventListener("input", onEvent);
