let container = document.getElementById("container");
let password = document.getElementById("password");
let showPassword = document.getElementById("showPassword");
let indicator = document.getElementById("indicator");
let message = document.getElementById("message");
let strength = document.getElementById("strength");

showPassword.addEventListener("click", () => {
  if (showPassword.classList.contains("fa-eye")) {
    showPassword.classList.remove("fa-eye");
    showPassword.classList.add("fa-eye-slash");
    password.type = "password";
  } else {
    showPassword.classList.remove("fa-eye-slash");
    showPassword.classList.add("fa-eye");
    password.type = "text";
  }
});

password.addEventListener("keyup", () => {
  const passwordValue = password.value;
  if (password.value.length == 0) {
    container.style.borderColor = "#fff";

    indicator.classList.remove("fa-circle-check");
    indicator.classList.remove("fa-xmark");
    indicator.classList.add("fa-lock");
    indicator.style.borderLeftColor = "#fff";
    indicator.style.color = "#fff";

    strength.innerHTML = "Not entered";
    strength.style.color = "#fff";

    message.style.color = "#fff";
  } else if (
    password.value.length < 4 &&
    password.value.length >= 1 &&
    passwordValue.match(/^[a-zA-Z]+$/)
  ) {
    container.style.borderColor = "#ff5925";

    indicator.classList.remove("fa-lock");
    indicator.classList.add("fa-xmark");
    indicator.style.borderLeftColor = "#ff5925";
    indicator.style.color = "#ff5925";

    strength.innerHTML = "Weak";
    strength.style.color = "#ff5925";

    message.style.color = "#ff5925";
  } else if (
    password.value.length < 8 &&
    password.value.length >= 4 &&
    passwordValue.match(/[a-zA-Z]/) &&
    passwordValue.match(/[\d]/)
  ) {
    container.style.borderColor = "#ffe925";

    indicator.classList.remove("fa-lock");
    indicator.classList.add("fa-xmark");
    indicator.style.borderLeftColor = "#ffe925";
    indicator.style.color = "#ffe925";

    strength.innerHTML = "Medium";
    strength.style.color = "#ffe925";

    message.style.color = "#ffe925";
  } else if (
    password.value.length >= 8 &&
    passwordValue.match(/[a-zA-Z]/) &&
    passwordValue.match(/[\d]/) &&
    passwordValue.match(/[^\w\s]/)
  ) {
    container.style.borderColor = "#26d730";

    indicator.classList.remove("fa-xmark");
    indicator.classList.add("fa-circle-check");
    indicator.style.borderLeftColor = "#26d730";
    indicator.style.color = "#26d730";

    strength.innerHTML = "Strong";
    strength.style.color = "#26d730";

    message.style.color = "#26d730";
  }
});
