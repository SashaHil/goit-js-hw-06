const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені.");
  }

  const info = {
    email: email.value,
    password: password.value,
  };

  console.log(info);

  form.reset();
};

form.addEventListener("submit", onFormSubmit);
