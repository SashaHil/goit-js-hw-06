const inputValidation = document.querySelector("#validation-input");

const validationEvent = () => {
  if (
    inputValidation.getAttribute("data-length") >
    inputValidation.value.trim().length
  ) {
    inputValidation.classList.remove("valid");
    inputValidation.classList.add("invalid");
  } else {
    inputValidation.classList.remove("invalid");
    inputValidation.classList.add("valid");
  }
};

inputValidation.addEventListener("blur", validationEvent);
