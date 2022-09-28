const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  const objestSubmit = { email, password };

  if (email === "" || password === "") {
    return alert("Всі поля повинні бути заповнені");
  }

  form.reset();
}
form.addEventListener("submit", onFormSubmit);
