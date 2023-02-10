const inputValidation = document.querySelector("#validation-input");

const validationEvent = (event) => {
  if (
    inputValidation.value.length == inputValidation.getAttribute("data-length")
  ) {
    inputValidation.classList.add("valid");
    if (inputValidation.classList.contains("invalid")) {
      inputValidation.classList.remove("invalid");
    }
  } else {
    if (inputValidation.classList.contains("valid")) {
      inputValidation.classList.remove("valid");
    }
    inputValidation.classList.add("invalid");
  }
};

inputValidation.addEventListener("blur", validationEvent);
