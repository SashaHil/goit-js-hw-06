const form = document.querySelector("form.login-form");

const validationForm = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені.");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  form.reset();
};

form.addEventListener("submit", validationForm);
