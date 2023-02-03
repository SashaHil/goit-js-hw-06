const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  console.log(formData);

  if (email === "" || password === "") {
    return alert("Всі поля повинні бути заповнені.");
  }

  form.reset();
};

form.addEventListener("submit", onFormSubmit);
