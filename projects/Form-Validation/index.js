const nameError = document.getElementById("name-error");
const numberError = document.getElementById("number-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

const validateName = () => {
  const name = document.getElementById("name").value;

  if (name.length == 0) {
    nameError.innerHTML = `Name is required`;
    return false;
  } else if (!name.match(/^[a-zA-Z]+\s{1}[a-zA-Z]+$/)) {
    nameError.innerHTML = "Invalid name";
    return false;
  } else {
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
  }
};

const validateNumber = () => {
  const number = document.getElementById("number").value;

  if (number.length == 0) {
    numberError.innerHTML = "Number is required";
    return false;
  } else if (number.length == 10) {
    numberError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
  } else {
    numberError.innerHTML = "Number must be 10 digits";
    return false;
  }
};

const validateEmail = () => {
  const email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  } else if (
    !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  ) {
    emailError.innerHTML = "Invalid email";
    return false;
  } else {
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
  }
};

const validateMessage = () => {
  const message = document.getElementById("message").value;
  if (message.length == 0) {
    messageError.innerHTML = `${20 - message.length} characters are required`;
    return false;
  } else if (message.length >= 20) {
    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
  } else {
    messageError.innerHTML = `${
      20 - message.length
    } more characters are required`;
    return false;
  }
};

const validateForm = () => {
  if (
    !validateName() ||
    !validateNumber() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.innerHTML = "Please fix the error";
    setTimeout(() => (submitError.innerHTML = ""), 3000);
    return false;
  } else {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxoKsQB5TGraaD6SwdMSYVkN15G7EfqypNazUUpZy-nplTzTMB20QB8aNjo-TenM9Q/exec";
    const form = document.forms["submit-to-google-sheet"];

    event.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        let spans = document.querySelectorAll("span");

        spans.forEach((span) => (span.innerHTML = ""));

        form.reset();
        submitError.innerHTML = "Details Submitted successfully";
        submitError.style.color = "green";

        setTimeout(() => {
          submitError.innerHTML = "";
          submitError.style.color = "red";
        }, 3000);
      })
      .catch((error) => {
        submitError.innerHTML = "Something went wrong! Please try again later";
        submitError.style.color = "red";
        setTimeout(() => (submitError.innerHTML = ""), 3000);
      });
  }
};
