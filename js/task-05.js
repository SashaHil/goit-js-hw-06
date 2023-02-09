const textInput = document.querySelector("input#name-input");
const text = document.querySelector("span#name-output");

const nameEvent = (event) => {
  if (event.target.value === "") {
    text.trim().textContent = "Anonymous";
  }
  text.trim().textContent = event.target.value;
};

textInput.addEventListener("input", nameEvent);
