const input = document.querySelector("#validation-input");

input.onblur = function onCheck() {
  if (this.getAttribute("data-length") > this.value.length) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
};
