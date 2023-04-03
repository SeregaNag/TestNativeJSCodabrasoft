const registrationForm = document.querySelector("#registration-form");
const submitButton = document.querySelector("#submit-button");
const messageDiv = document.querySelector("#message");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const birthdate = document.querySelector("#birthdate").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;
  
  messageDiv.classList.remove("message-success");

  if (
    firstName === "" ||
    lastName === "" ||
    birthdate === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    messageDiv.textContent = "Все поля должны быть заполнены!";
    return;
  }

  if (firstName.length < 2 || firstName.length > 25) {
    messageDiv.textContent = "Имя должно содержать от 2 до 25 символов!";
    return;
  }

  if (lastName.length < 2 || lastName.length > 25) {
    messageDiv.textContent = "Фамилия должно содержать от 2 до 25 символов!";
    return;
  }

  if (new Date(birthdate) > new Date()) {
    messageDiv.textContent = "Дата рождения указана неверно!";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    messageDiv.textContent = "Введите валидный email!";
    return;
  }

  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{8,}$/.test(
      password
    )
  ) {
    messageDiv.textContent =
      "Пароль должен содержать минимум 8 символов, минимум 1 символ в верхнем регистре, минимум одна цифра 1-9, минимум 1 специальный символ из перечисленных !@#$%";
    return;
  }

  if (password !== confirmPassword) {
    messageDiv.textContent = "Подтверждение пароля не совпадает с паролем!";
    return;
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      birthdate,
      email,
      password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        messageDiv.textContent = "Регистрация прошла успешно!";
        if (messageDiv.textContent === "Регистрация прошла успешно!") {
          messageDiv.classList.add("message-success");
        }
        registrationForm.reset();
        console.log(response.clone().text());
      } else {
        throw new Error("Ошибка при отправке данных на сервер!");
      }
    })
    .catch((error) => alert(error.message));
});
