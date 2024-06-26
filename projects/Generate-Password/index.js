const copy = document.getElementById("copy");
const password = document.getElementById("password");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-/<>?[]{}|";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  copy.classList.remove("fa-check");
  copy.classList.add("fa-copy");
  let newPassword = "";
  newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
  newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  newPassword += number[Math.floor(Math.random() * number.length)];
  newPassword += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > newPassword.length) {
    newPassword += allChars[Math.floor(Math.random() * allChars.length)];
  }
  password.value = newPassword;
}

function copyPassword() {
  navigator.clipboard.writeText(password.value);
  copy.classList.remove("fa-copy");
  copy.classList.add("fa-check");
  setTimeout(() => {
    copy.classList.remove("fa-check");
    copy.classList.add("fa-copy");
  }, 3000);
}
